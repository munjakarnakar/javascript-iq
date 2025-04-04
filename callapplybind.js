function cook(itemOne, itemTwo, itemThree){
    console.log(`${this.name} is having meal with ${itemOne}, ${itemTwo}, ${itemThree}`)
}
const customer = {name:"Karnakar"};
cook.call(customer, 'Chicken 65', 'Manchuria', 'Biryani')
cook.apply(customer, ['Chicken 65', 'Manchuria', 'Biryani'])
const bindEx = cook.bind(customer, 'Chicken 65', 'Manchuria', 'Biryani');
bindEx();