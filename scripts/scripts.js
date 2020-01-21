const app = new Vue({
    el: '#app',
    data: {
      title: 'PERROS',
      message: "I love dogs",
      message1: "I like cats",
      seen: 1,
      see:true,
      tec: "now",
      currentP: 0,
      perroCount:3,
      perros: [
          {name:'Perro1', source:"https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"},
          {name:'Perro2', source: "https://images.dog.ceo/breeds/hound-walker/n02089867_1931.jpg"},
          {name:'Perro3', source: "https://images.dog.ceo/breeds/hound-english/n02089973_3055.jpg"}
      ],
      perrito:'',
    },
    methods:{
        change(){
            console.log("click", this.currentP);
            this.currentP +=1
            if(this.currentP > this.perroCount-1)
            this.currentP = 0;
        },
        onSeen(){
            if(this.seen===1)
                this.seen = 0;
            else
                this.seen = 1;
        },
        printM(){
            console.log("you uncheked display")
            if (this.see===true)
                this.see = false
            else
                this.see = true

        },

        addItem(){
            this.perros.push({name: this.perrito, source:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"});
                this.perrito = " ";
                this.perroCount++;
        }

    },
    computed: {
        currentI(){
            return this.perros[this.currentP].source
        }
    }
  })
  