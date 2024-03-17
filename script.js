 function calculateAge() {
            let dob = new Date(document.getElementById("birthday").value);
            let currentDate = new Date();
            let age = currentDate.getFullYear() - dob.getFullYear();

            // Adjust age if the birthday hasn't occurred yet this year
            if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
                age--;
            }

            document.getElementById("result").innerHTML = `You are ${age} years old`;
