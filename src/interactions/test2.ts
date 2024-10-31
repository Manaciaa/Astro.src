class ParagraphChanger {
    // Properties
    paragraph: HTMLParagraphElement | null;

    constructor(){
        this.paragraph = document.querySelector('p');
        
    }

    CheckParagraph () {
        console.log(this.paragraph);
        // console.warn(this.paragraph);
        // console.error(this.paragraph):
    }

    ClassOperations(){
        if(this.paragraph){
        this.paragraph?.classList.add("first-class", "second-class");
        }
    }
    ChangeStyle (){
        if (this.paragraph) {
            this.paragraph.style.background = "black";
            this.paragraph.style.border = "2px solid blue";
            this.paragraph.style.borderRadius = "30px";
            this.paragraph.style.color = "White";

        }
    }
}

const ParaChangerInstance = new ParagraphChanger()
