var carMazda = {
    make: "Mazda",
    model: 929,
    year: 1991,
    color: "blue",
    passengers: 4,
    convertible: false,
    mileage: 196740,
    "engine Capacity": 2200,
    weight: 2700,
    "number Of Doors": 5,
    engine: "petrol",
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};


var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};




var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};


var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.drive();
fiat.start();
fiat.drive();

var cadilac = {
    make: "Cadilac",
    model: "Escalate",
    year: 1995,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    fuel: 0,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            console.log("Будь внимателен , у тебя нету топлива ");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Братан всё четко едем , у нас еще " + this.fuel + " литров топлива поэтому валим валим");
                this.fuel = this.fuel - 1;

            } else {
                this.stop();
                console.log("Ха ха ха , закончилось топливо");
            }
        } else {
            console.log("Братишка ты сново забыл запустить двигатель .");
        }
    },


    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

cadilac.addFuel(8);
cadilac.start();
cadilac.drive();
cadilac.drive();
cadilac.drive();
cadilac.start();
cadilac.drive();
cadilac.drive();
cadilac.drive();
cadilac.drive();
cadilac.start();
cadilac.drive();
cadilac.drive();



