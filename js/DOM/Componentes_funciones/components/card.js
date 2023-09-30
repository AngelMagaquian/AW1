const calcular = (a,b) =>{
    return a * b
}


export const cardComponent = (data) =>{

    data.title = data.title.toUpperCase()

    data.a === 0 ? data.a = 1 : data.a = data.a

    if(data.b === 0 ){
        data.b = 1
    }
    
    return `
    <div class="card my-3">
        <div class="card-header">
            ${data.title}
        </div>

        <div class="card-body">
            ${calcular(data.a,data.b)}
        </div>

        <div class="card-footer">
            ${data.footer}
        </div>
    </div>
    
    `
}


