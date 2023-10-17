export const cardElement = (title, text, footer )=>{
    return`
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    ${title}
                </div>
            </div>
            
            <div class="card-body">
                ${text}
            </div>
            <div class="card-footer">
                ${footer}
            </div>
        </div>
    `
}