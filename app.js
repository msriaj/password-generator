

        const slider = document.getElementById("passRange");
        const output = document.getElementById("demo");
        output.value = slider.value;

        slider.oninput = function () {
            output.value = this.value;
        }


        onload

        function genPass() {

            const lengthPass = document.getElementById("passRange").value;

            let Allowed = {
                Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
                Lowers: "qwertyuiopasdfghjklzxcvbnm",
                Numbers: "1234567890",
                Symbols: "!@#$%^&*"
            }

            const addUppercase = document.getElementById("Uppercase");
            const addLowercase = document.getElementById("Lowercase");
            const addNumbers = document.getElementById("Numbers");
            const addSymbols = document.getElementById("Symbols");

            if (addUppercase.checked == true) {

            }
            else {
                Allowed.Uppers = "";
            }

            if (addLowercase.checked == true) { }
            else {
                Allowed.Lowers = "";
            }

            if (addNumbers.checked == true) { }
            else {
                Allowed.Numbers = "";
            }

            if (addSymbols.checked == true) { }
            else {
                Allowed.Symbols = "";
            }

            const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))


            let pwd = "";
            if (addUppercase.checked == true) {
                pwd += getRandomCharFromString(Allowed.Numbers);
            }

            if (addLowercase.checked == true) {
                pwd += getRandomCharFromString(Allowed.Lowers);
            }

            if (addNumbers.checked == true) {
                pwd += getRandomCharFromString(Allowed.Numbers);
            }
            if (addSymbols.checked == true) {
                pwd += getRandomCharFromString(Allowed.Symbols);
            }

            
            for (let i = pwd.length; i < lengthPass; i++)
                pwd += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters



            document.getElementById("newPass").value = pwd;
            navigator.clipboard.writeText(pwd);

        }

        const msg = document.getElementById("gPass")
        msg.addEventListener("click", function () {
            document.getElementById("toast-success").classList.remove("hidden");
            console.log("clicked");
        });

        document.getElementById("closeNot").addEventListener("click", function () {
            document.getElementById("toast-success").classList.add("hidden")
        });
