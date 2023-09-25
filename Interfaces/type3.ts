interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake():void
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },

    brake():void {
        console.log("hit the brakes");
    },
}

car.accelerate();
