<template>
  <div class="inscription2">
       <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand"><img class="img-responsive " alt="Vue logo" src="../assets/logoSite.jpg"></a>
                <form class="d-flex">
                <router-link  class="btn btn-primary" to="/inscription2">Inscription</router-link>
                <router-link  class="btn btn-outline-primary" to="/connexion">Connexion</router-link>
                </form>
            </div>
     </nav>
      <h5 class="text-primary" style="text-align:center; margin-top:25px" ><b> INSCRIPTION </b></h5>
   
        <form row g-3 method="GET" action="../views/Inscription3View.vue"> 

            <fieldset  class="border p-2">

                <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Information financière de l'entreprise</h4></legend>

                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Equipes dirigeantes</h4></legend>
                    <div class="row d-flex flew-wrap justify-content-center">
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-white" style="border-right: none;" id="basic-addon1">
                                        <img src="../assets/person-square.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="nom" type="text" placeholder="Nom" required>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Place Marker.svg" alt="">
                                    </span>
                                    <select class="form-select" id="autoSizingSelect" required>
                                        <option selected>Position</option>
                                        <option value="1">CEO</option>
                                        <option value="2">CTO</option>
                                        <option value="3">COO</option>
 
                                    </select>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-white" style="border-right: none;" id="basic-addon1">
                                        <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="url" type="url" placeholder="Url" v-model="url" @input="change($event)" @change="change($event)" required>
                                <div class="error" v-if="isValid">URL invalide</div>
                            </div>
                        </div>
                        
                        <div class="col-sm-1 mb-3">
                            <div class="input-group">
                                <span class=" bg-white" id="basic-addon1">
                                   <a href="" onclick="" ><img src="../assets/Add circle.svg" alt=""  ></a>   
                                </span>
                            </div>
                        </div>
                
                    </div>

                </fieldset>
                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Investisseurs</h4></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-3 mb-3">
                             <div class="input-group">
                                 <span class="input-group-text bg-white" style="border-right: none;" id="basic-addon1">
                                    <img src="../assets/person-square.svg" alt="" width="27px">
                                </span>
                                <input class="form-control" id="nom" type="text" placeholder="Nom" required>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-white" id="basic-addon1">
                                    <img src="../assets/Place Marker.svg" alt="">
                                </span>
                                    <select class="form-select" id="autoSizingSelect" required>
                                        <option selected>Position</option>
                                        <option value="1">CEO</option>
                                        <option value="2">CTO</option>
                                        <option value="3">COO</option>

                                    </select>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                             <div class="input-group">
                                <span class="input-group-text bg-white" style="border-right: none;" id="basic-addon1">
                                    <img src="../assets/Link.svg" alt="">
                                </span>
                                <input class="form-control" id="url" type="url" placeholder="Url" v-model="URL" @input="change($event)" @change="change($event)" required>
                                <div class="error" v-if="isValid">URL invalide</div>
                            </div>
                        </div>
                        <div class="col-sm-1 mb-3">
                            <div class="input-group">
                                <span class=" bg-white" id="basic-addon1">
                                    <img src="../assets/Add circle.svg" alt="">
                                </span>
                            </div>
                        </div>
                
                    </div>
                </fieldset>
                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Chiffres d'affaires</h4></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-4 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/table.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="annee" type="date" placeholder="Année" required>
                            </div>
                        </div>
                        <div class="col-sm-5 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Table of Content.svg" alt="">
                                    </span>
                                <input class="form-control" id="montant" type="text" placeholder="Montant" required>
                            </div>
                        </div>
                         <div class="col-sm-1 mb-3">
                            <div class="input-group">
                                <span class=" bg-white" id="basic-addon1">
                                    <img src="../assets/Add circle.svg" alt="">
                                </span>
                            </div>
                        </div>
                    </div>
                </fieldset>
                 <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Levés de fonds</h4></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-4 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/table.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="annee" type="date" placeholder="Année" required>
                            </div>
                        </div>
                        <div class="col-sm-5 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Table of Content.svg" alt="">
                                    </span>
                                <input class="form-control" id="montant" type="text"  placeholder="Montant" required>
                            </div>
                        </div>
                        <div class="col-sm-1 mb-3">
                            <div class="input-group">
                                <span class=" bg-white" id="basic-addon1">
                                    <img src="../assets/Add circle.svg" alt="">
                                </span>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <br>
                    <div style="margin-left: 4px" class="row gx-3 gy-2 align-items-center">
                        <div class="col-sm-2 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/dollar.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="capital" type="text" placeholder="Capital Social" required>
                            </div>
                        </div>
                    </div>
            </fieldset>

                <br><br><br>
                 <div class="position-relative">
                    <div class="position-absolute bottom-0 start-0"><router-link  class="btn btn-primary previous pull-left" to="/inscription1">&#8249; Précédent</router-link></div>
                    <div class="position-absolute bottom-0 end-0"><button type="submit" class="btn btn-primary next pull-right" to="../views/Inscription3View.vue">Suivant &#8250;</button></div>
                </div>
            </form>
  </div>
  
</template>

<script >
// @ is an alias to /src

export default {
    name: "InputUrl",
    data(){
        return{
            url: "",
            isValid: false,
            regex: '[YOUR URL REGEX GOES HERE]'
        };

    },
    methods: {
        change: function(e){
            const url = e.target.value
            this.isURLValid(url)
        },
        isURLValid: function(inputUrl) {
            this.isValid = this.regex.test(inputUrl)
        },
    }
}
</script>

<style scoped>
fieldset {
    border: 2px solid  #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 10px 10px;
  }
  .last{
         margin-left: 25px ;
  }
.previous,.next{   
     margin: 15px 15px;

    text-decoration: none;
   
}

a {
         margin-right: 15px ;

  text-decoration: none;
  display: inline-block;
}
h3{
    margin-top: 25px;
}
.round {
  border-radius: 70%;
}
input{
   border-left: none;
}
select{
    border-left: none;
}

</style>