let customerPasscode = "2024";
let balance = 2025;
let maxWithdraw = 1500;
let attempts = 0;



function atm() {
    while (attempts < 3) {
        let passcode = prompt("ბანკომატით სარგებლობისათვის,\nგთხოვთ- შეიყვანეთ პინკოდი:");
        if (passcode === customerPasscode) {
            while (true) {
                let choice = prompt("გთხოვთ აირჩიოთ სასურველი ოპერაცია:\n1) ბალანსის შემოწმება\n2) თანხის გატანა\n3) გამოსვლა"); {
                    if (choice == "1") {
                        alert(`თქვენი ბალანსი არის: ${balance} ლარი`);
                    } else if (choice == "2") {
                        let amount = parseInt(prompt("გასატანი თანხის ოდენობა:"));
                        if (isNaN(amount) || amount <= 0 ) {
                            alert("გთხოვთ შეიყვანოთ მხოლოდ ციფრები");
                        } else if (amount % 5 !== 0) {
                            alert("შეიყვანეთ 5ის / 10ის ჯერადი რიცხვები, მაქსიმუმ 1500");
                        } else if (balance=== 0) {
                            alert("ბალანსზე თანხა არ გაქვთ");

                        } else if (amount > maxWithdraw) {
                            alert("შეგახსენებთ, ბანკომატიდან ერთ ჯერზე მაქსიმუმ 1500 ლარის გატანა შეგიძლიათ.");
                        } else {
                            if (amount > balance) {
                                alert(`ბალანსზე არასაკმარისი თანხაა. ბალანსი შეადგენს ${balance} ლარს`);
                            } else {
                                balance -= amount;
                                alert(`თქვენ გაანაღდეთ ${amount} ლარი. ბალანსზე დარჩენილია ${balance} ლარი`);

                                if (balance === 0) {
                                    choice;
                                }
                            }
                        }
                    } else if (choice == "3") {
                        alert("თქვენ გახვედით სისტემიდან. \nმადლობა რომ ხართ ჩვენი ბანკის მომხმარებელი");
                        return;
                    } else {
                        alert("დაფიქსირდა შეცდომა. გთხოვთ არჩევანი გააკეთოთ მოცემული ოპერაციათაგან");
                    }
                }
            }
        } else {
            attempts++
            if (attempts < 3) {
                alert(`პინკოდი არასწორია. დაგრჩათ \n${3 - attempts} ცდა. არასწორი ცდების შემთხვევაში, თქვენი ბარათი დაიბლოკება`);
            }

            else {
                alert("3 არასწორი ცდის გამო თქვენი ბარათი დაიბლოკა");
                return;
            }
        }
    }
}

atm();