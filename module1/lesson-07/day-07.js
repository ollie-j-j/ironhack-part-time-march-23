class Professor { // blueprint for an Object Professor in my system
    constructor(name, researchArea, nobelPrize){
        this.name = name;
        this.title = 'Professor'
        this.researchArea = researchArea;
        this.nobelPrize = nobelPrize;
    }

    doesResearch(){
        console.log(`${this.name} specialises in ${this.researchArea}`)
    }

    checkNobel(date){
        if(this.nobelPrize){
            console.log(`${this.name} is a nobel prize owner from ${date}`)
        }
        else {
            console.log(`${this.name} is not a nobel prize winner  from ${date}`)
        }
    }
    
}


const einstein = new Professor('Albert einstein', 'Mathematics', true)
const hawkings = new Professor('Stephen Hawkings', 'Physics', false)

console.log('einstein', einstein)
console.log('hawkings', hawkings)

einstein.doesResearch()
hawkings.doesResearch()

einstein.checkNobel('1960')
hawkings.checkNobel('2013')