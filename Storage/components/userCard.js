export const userCard = (arr)=>{
    return`
    <div class="card" style="width: 18rem;">
            <img src=${arr.img} alt="image" class="img-fluid">
            <div class="card-body">
              <h5 class="card-title">${arr.email}</h5>
              <p class="card-text">${arr.name}</p>
              <p class="card-text">${arr.lastName}</p>
              <button id="btnLogOut" class="btn btn-danger">Cerrar sesion</a>
            </div>
        </div>
    `
}