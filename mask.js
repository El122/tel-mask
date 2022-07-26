const setMask = (fieldClass) => {
    const fields = document.getElementsByClassName(fieldClass);

    for (let field of fields) {
        field.addEventListener("click", () => {
            if (field.value == "") field.value = "+7 (";
        });

        field.addEventListener("focus", () => {
            if (field.value == "") field.value = "+7 (";
        });

        field.addEventListener("keydown", (event) => {
            event.preventDefault();
            console.log(event.key);
            const key = event.key;

            if (key == "Backspace" && field.value.length > 4) {
                field.value = field.value.substring(0, field.value.length - 1);
                return;
            }
            if (field.value.length > 17) return false;

            if (/[\d]/.test(key)) {
                field.value = field.value + key;
            }

            switch (field.value.length) {
                case 7:
                    field.value = field.value + ") ";
                    break;
                case 12:
                    field.value = field.value + "-";
                    break;
                case 15:
                    field.value = field.value + "-";
                    break;
            }
        });
    }
};

setMask("mask-phone");
