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
      <h5 class="text-primary" style="text-align:center; margin-top:25px" ><b> MODIFICATION DES INFORMATIONS </b></h5>
   
            <form row g-3 method="GET" action="../views/inscription3View.vue"> 

            <fieldset  class="border p-2">

                <legend  class="float-none w-auto p-3"><h5 class="text-primary" style="text-align:center" >Information financière de l'entreprise</h5></legend>

                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h5 class="text-primary" style="text-align:center" >Equipes dirigeantes</h5></legend>
                    <div class="row  d-flex flew-wrap justify-content-center"  >
                        <div class="col-sm-3 mb-3 ">
                             <div class="input-group">
                                   <span class="input-group-text bg-white" id="basic-addon1" style="border-right: none;">
                                        <img src="../assets/person-square.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="nom" type="text" placeholder="Nom 1" required v-model="equipe.name">
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Place Marker.svg" alt="">
                                    </span>
                                    <select class="form-select" id="autoSizingSelect" required v-model="equipe.position">
                                        <option selected>Position</option>
                                        <option value="CEO">CEO</option>
                                        <option value="CTO">CTO</option>
                                        <option value="COO">COO</option>
 
                                    </select>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                             <div class="input-group">
                                   <span class="input-group-text bg-white" id="basic-addon1" style="border-right: none;" >
                                        <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="url" type="url" placeholder="Profil likedin 1" required v-model="equipe.url">
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
                    <legend  class="float-none w-auto p-3"><h5 class="text-primary" style="text-align:center" >Investisseurs</h5></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-3 mb-3">
                             <div class="input-group">
                                 <span class="input-group-text bg-white" id="basic-addon1" style="border-right: none;">
                                    <img src="../assets/person-square.svg" alt="" width="27px">
                                </span>
                                <input class="form-control" id="nom" type="text" placeholder="Nom 1" required v-model="investisseur.name">
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-white" id="basic-addon1">
                                    <img src="../assets/Place Marker.svg" alt="">
                                </span>
                                    <select class="form-select" id="autoSizingSelect" placeholder="Position" required v-model="investisseur.position">
                                        <option selected>Position</option>
                                        <option value="CEO">CEO</option>
                                        <option value="CTO">CTO</option>
                                        <option value="COO">COO</option>

                                    </select>
                            </div>
                        </div>
                        <div class="col-sm-3 mb-3">
                             <div class="input-group">
                                <span class="input-group-text bg-white" id="basic-addon1" style="border-right: none;">
                                    <img src="../assets/Link.svg" alt="">
                                </span>
                                <input  v-model="investisseur.url" class="form-control" id="url" type="url" placeholder="Profil likedin 1" required >
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
                    <legend  class="float-none w-auto p-3"><h5 class="text-primary" style="text-align:center" >Chiffres d'affaires</h5></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-4 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/table.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="annee" type="date" placeholder="" required v-model="chiffreAffaire.annee">
                            </div>
                        </div>
                        <div class="col-sm-5 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Table of Content.svg" alt="">
                                    </span>
                                <input class="form-control" id="montant" type="text" placeholder="15.625.958" required v-model="chiffreAffaire.montant">
                            </div>
                        </div>
                         <div class="col-sm-1 mb-3">
                            <div class="input-group">
                                <span class=" bg-white" id="basic-addon1" v-on:click="listEquipe">
                                    <img src="../assets/Add circle.svg" alt="">
                                </span>
                            </div>
                        </div>
                    </div>

                </fieldset>
                 <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h5 class="text-primary" style="text-align:center" >Levés de fonds</h5></legend>
                    <div class="row   d-flex flew-wrap justify-content-center">
                        <div class="col-sm-4 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/table.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="annee" type="date" placeholder="Année" required v-model="leveeFond.annee">
                            </div>
                        </div>
                        <div class="col-sm-5 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Table of Content.svg" alt="">
                                    </span>
                                <input class="form-control" id="montant" type="text" placeholder="Montant" required v-model="leveeFond.montant">
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
                    <div class="row gx-3 gy-2 align-items-center" style="margin-left: 4px">
                        <div class="col-sm-2 mb-4">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/dollar.svg" alt="" width="27px">
                                    </span>
                                <input class="form-control" id="capital" type="text" placeholder="Capital Social" required v-model="capital">
                            </div>
                        </div>
                    </div>
            </fieldset>
                <br><br><br>
                 <div class="position-relative">
                    <div class="position-absolute bottom-0 start-0"><router-link  class="btn btn-primary previous pull-left" to="/inscription1">&#8249; Précédent</router-link></div>
                <div class="position-absolute bottom-0 end-0"><button class="btn btn-primary next pull-right" type="Submit">Suivant &#8250;</button></div>
                </div>
            </form>

    
  </div>
  
</template>
<script>/*
import { mapState} from 'vuex'*/
export default {
    name:'Inscription2View',
        computed:
        {
                   /*  ...mapState(['startup']),*/
                      
        },
    data(){
        return{
        
            equipe:[{
                name:'',
                position:'',
                url:'',
            }
            ],
            
            investisseur:[{
                name:'',
                position:'',
                url:'',
            }
            ],
            chiffreAffaire:[{
                annee:'',
                montant:'',
            }
            ],
            leveeFond:[{
                annee:'',
                montant:'',
            }
            ],
            capital:'',
        }
    },
    methods:
    {
        getDate()
        {
            let d = new Date();
            return d;
        },
        addNewTeam() {
        this.startup.list_team.push( {name:this.equipe.name,position:this.equipe.position,url:this.equipe.url})
        }
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
input,select{
    border-left: none;
}

</style>