document.addEventListener("DOMContentLoaded", () => {
    let scheduleGrid = document.getElementById("schedule-grid");
    let appointmentDate = document.getElementById("appointment-date");
    let filterSpecialists = document.getElementById("filter-specialists");
    let specialistsList = document.getElementById("specialists-list");

    appointmentDate.value = new Date().toISOString().split('T')[0];

    let specialistsData = [
        { id: 1, name: "Иванова Н.С." },
        { id: 2, name: "Ароничкова Л.И." },
        { id: 3, name: "Буланова Л.И." },
        { id: 4, name: "Харитонова П.И." },
        { id: 5, name: "Веничит П.И." },
        { id: 6, name: "Степанова Л.А." },
        { id: 7, name: "Рускова П.И." },
        { id: 8, name: "Перепелкина П.И." },
        { id: 9, name: "Петрова М.И." },
        { id: 10, name: "Алентьева В.И." },
        { id: 11, name: "Сидорова П.П." }
    ];

    let scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || {
        "1": { start: "09:00", end: "17:00", appointments: [] },
        "2": { start: "10:00", end: "18:00", appointments: [] },
        "3": { start: "10:00", end: "18:00", appointments: [] },
        "4": { start: "08:00", end: "16:00", appointments: [] },
        "5": { start: "08:00", end: "16:00", appointments: [] },
        "6": { start: "11:00", end: "19:00", appointments: [] },
        "7": { start: "09:00", end: "17:00", appointments: [] },
        "8": { start: "09:00", end: "17:00", appointments: [] },
        "9": { start: "10:00", end: "18:00", appointments: [] },
        "10": { start: "08:00", end: "16:00", appointments: [] },
        "11": { start: "11:00", end: "19:00", appointments: [] }
    };

    function generateTimeSlots(start, end) {
        let slots = [];
        let current = new Date(`1970-01-01T${start}:00`);
        let endDate = new Date(`1970-01-01T${end}:00`);

        while (current < endDate) {
            slots.push(current.toTimeString().slice(0, 5));
            current.setMinutes(current.getMinutes() + 10);
        }
        return slots;
    }

    function renderSchedule() {
        scheduleGrid.innerHTML = "";
        let selectedSpecialists = Array.from(document.querySelectorAll("#specialists-list input[type=checkbox]:checked")).map(input => input.value);

        selectedSpecialists.forEach(name => {
            let specNames = name.split("-");
            specNames.forEach(singleName => {
                let spec = specialistsData.find(s => s.name.includes(singleName.trim()));
                if (spec) {
                    let data = scheduleData[spec.id];
                    let timeSlots = generateTimeSlots(data.start, data.end);

                    let col = document.createElement("div");
                    col.classList.add("schedule-column");

                    let header = document.createElement("div");
                    header.classList.add("schedule-header");
                    header.innerText = `${spec.name} (${appointmentDate.value})`;
                    col.appendChild(header);

                    timeSlots.forEach(slot => {
                        let slotDiv = document.createElement("div");
                        slotDiv.classList.add("schedule-slot");
                        let appointment = data.appointments.find(a => a.date === appointmentDate.value && a.time === slot);

                        if (appointment) {
                            slotDiv.classList.add("booked");
                            slotDiv.innerText = appointment.abbreviatedName;
                            slotDiv.addEventListener("click", () => viewAppointmentDetails(spec.id, slot, appointment));
                        } else {
                            slotDiv.innerText = slot;
                            slotDiv.addEventListener("click", () => createAppointment(spec.id, slot));
                        }

                        col.appendChild(slotDiv);
                    });

                    scheduleGrid.appendChild(col);
                }
            });
        });
    }

    function createAppointment(specialistId, time) {
        showAppointmentForm({
            specialistId,
            time,
            date: appointmentDate.value,
            onSubmit: (lastname, firstname, middlename) => {
                let abbreviatedName = `${lastname.length > 10 ? lastname.charAt(0) + '.' : lastname} ${firstname.charAt(0)}.${middlename.charAt(0)}.`;
                let data = scheduleData[specialistId];
                data.appointments.push({ date: appointmentDate.value, time, lastname, firstname, middlename, abbreviatedName });
                localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
                renderSchedule();
            }
        });
    }

    function viewAppointmentDetails(specialistId, time, appointment) {
        showAppointmentForm({
            specialistId,
            time,
            date: appointmentDate.value,
            lastname: appointment.lastname,
            firstname: appointment.firstname,
            middlename: appointment.middlename,
            onSubmit: null,
            onDelete: () => {
                let data = scheduleData[specialistId];
                let appointmentIndex = data.appointments.findIndex(a => a.date === appointmentDate.value && a.time === time);
                if (appointmentIndex !== -1) {
                    data.appointments.splice(appointmentIndex, 1);
                    localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
                    renderSchedule();
                }
            }
        });
    }

    function showAppointmentForm({ specialistId, time, date, lastname = '', firstname = '', middlename = '', onSubmit, onDelete }) {
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        let appointmentForm = document.createElement('div');
        appointmentForm.classList.add('appointment-form');
        appointmentForm.innerHTML = `
            <form id="appointment-form">
                <h3>Запись на прием</h3>
                <p>Дата: ${date}</p>
                <p>Время: ${time}</p>
                <p>Специалист: ${specialistsData.find(s => s.id === specialistId).name}</p>
                ${onSubmit ? `
                <label for="patient-lastname">Фамилия:</label>
                <input type="text" id="patient-lastname" name="lastname" value="${lastname}" required><br>
                <label for="patient-firstname">Имя:</label>
                <input type="text" id="patient-firstname" name="firstname" value="${firstname}" required><br>
                <label for="patient-middlename">Отчество:</label>
                <input type="text" id="patient-middlename" name="middlename" value="${middlename}" required><br>
                <button type="submit">Подтвердить</button>
                ` : `
                <p>Фамилия: ${lastname}</p>
                <p>Имя: ${firstname}</p>
                <p>Отчество: ${middlename}</p>
                <button type="button" id="delete-button">Удалить</button>
                `}
                <button type="button" id="cancel-button">Отмена</button>
            </form>
        `;

        document.body.appendChild(appointmentForm);

        let form = document.getElementById('appointment-form');
        let deleteButton = document.getElementById('delete-button');
        let cancelButton = document.getElementById('cancel-button');

        let removeForm = () => {
            document.body.removeChild(overlay);
            document.body.removeChild(appointmentForm);
        };

        overlay.addEventListener('click', removeForm);
        cancelButton.addEventListener('click', removeForm);

        if (onSubmit) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                let lastname = document.getElementById('patient-lastname').value;
                let firstname = document.getElementById('patient-firstname').value;
                let middlename = document.getElementById('patient-middlename').value;
                onSubmit(lastname, firstname, middlename);
                removeForm();
            });
        }

        if (onDelete) {
            deleteButton.addEventListener('click', () => {
                onDelete();
                removeForm();
            });
        }
    }

    function filterSpecialistsList() {
        let filter = filterSpecialists.value.toLowerCase();
        let specialists = specialistsList.querySelectorAll(".specialist-group");

        specialists.forEach(spec => {
            let label = spec.querySelector("label").innerText.toLowerCase();
            if (label.includes(filter)) {
                spec.style.display = "block";
            } else {
                spec.style.display = "none";
            }
        });
    }

    appointmentDate.addEventListener("change", renderSchedule);
    filterSpecialists.addEventListener("input", filterSpecialistsList);
    specialistsList.addEventListener("change", renderSchedule);

    document.getElementById('analytics-button').addEventListener('click', () => {
        window.location.href = 'charts.html';
    });

    renderSchedule();
});






