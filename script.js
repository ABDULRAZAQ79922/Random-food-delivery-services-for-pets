const myServices = [
    {
        name: "Pawsome Pet Food Delivery",
        description: "Delivering the best pet food to keep your furry friends happy and healthy.",
        image: "Pawsome Pet Food Delivery.jpeg",
        rating: 4.5
    },
    {
        name: "Furry Feasts",
        description: "Gourmet meals for your pets delivered right to your door.",
        image: "Furry Feasts.jpeg",
        rating: 4.8
    },
    {
        name: "Whisker Wishes",
        description: "Specialty pet food delivery service with a touch of magic.",
        image: "Whisker Wishes.jpeg",
        rating: 4.7
    },
    {
        name: "Tail-Wag Treats",
        description: "Delicious treats for dogs that will make their tails wag with joy.",
        image: "Tail-Wag Treats.png",
        rating: 4.6
    },
    {
        name: "Bark & Bite Delivery",
        description: "A wide range of pet food options for dogs of all sizes and breeds.",
        image: "Bark & Bite Delivery.jpeg",
        rating: 4.9
    },
    {
        name: "Purr-fect Pantry",
        description: "A curated selection of the finest cat foods to keep your feline friends purring.",
        image: "Purr-fect Pantry.jpeg",
        rating: 4.5
    }
   
];

function generateRandomService() {
    const myRandomIndex = Math.floor(Math.random() * myServices.length);
    const myService = myServices[myRandomIndex];

    document.getElementById('myServiceName').textContent = myService.name;
    document.getElementById('myServiceDescription').textContent = myService.description;
    document.getElementById('myServiceImage').src = myService.image;
    document.getElementById('myServiceRating').textContent = `Rating: ${myService.rating} ⭐`;

    const myResultElement = document.getElementById('myResult');
    myResultElement.classList.add('show');

    document.getElementById('myBookingMessage').textContent = '';
}

function bookService() {
    const myBookingMessageElement = document.getElementById('myBookingMessage');
    myBookingMessageElement.textContent = 'Delivery has been booked!';
}