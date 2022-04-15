<template>
  <div class="inscription3">
      <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand"><img class="img-responsive " alt="Vue logo" src="../assets/logoSite.jpg"></a>
                <form class="d-flex">
                <router-link  class="btn btn-outline-primary" to="/inscription2">Inscription</router-link>
                <router-link  class="btn btn-outline-primary" to="/connexion">Connexion</router-link>
                </form>
            </div>
     </nav>
     <h3 class="text-primary" style="text-align:center" >INSCRIPTION</h3>
   
            <form row g-3> 
                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Information de l'entreprise</h4></legend>
                    <div class="row gx-3 gy-2 align-items-center">
                        <div class="col-sm-6 mb-3">
                             <div class="input-group">
                                   <span class="input-group-text bg-white" style="border-right: none;" id="basic-addon1">
                                        <img src="../assets/person-square.svg" alt="">
                                    </span>
                                <input class="form-control" id="username" type="text" placeholder="Username">
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Lock.svg" alt="">
                                    </span>
                                <input class="form-control" id="password" type="text" placeholder="Password">
                            </div>
                        </div>
                
                    </div>
                    <br>
                     <div class="row gx-3 gy-2 align-items-center">
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                                   <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/mail.svg" alt="">
                                    </span>
                                <input class="form-control" id="emailRecuperation" type="text" placeholder="Email de récupération">
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="border p-2">
                    <legend  class="float-none w-auto p-3"><h4 class="text-primary" style="text-align:center" >Information réseaux sociaux de l'entreprise</h4></legend>
                    <div class="row gx-3 gy-2 align-items-center">
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="urlfacebook" type="text" placeholder="Url de Facebook">
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="urllinkedin" type="text" placeholder="Url de Linkedin">
                            </div>
                        </div>
                
                    </div>
                    <br>
                     <div class="row gx-3 gy-2 align-items-center">
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                            <span class="input-group-text bg-white" id="basic-addon1">
                                       <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="urlinstagram" type="text" placeholder="Url d'Instagram">
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="input-group">
                            <span class="input-group-text bg-white " id="basic-addon1">
                                       <img src="../assets/Link.svg" alt="">
                                    </span>
                                <input class="form-control" id="urltwiter" type="text" placeholder="Url de Twiter">
                            </div>
                        </div>
                    </div>
                </fieldset>
                <br><br><br>
                 <div class="position-relative">
                <div class="position-absolute bottom-0 start-0"><router-link  class="btn btn-outline-primary previous pull-left" to="/inscription2">&#8249; Précédent</router-link></div>
                <div class="position-absolute bottom-0 end-0"><router-link  class="btn btn-outline-primary next pull-right" to="/inscription4">S'incrire &#8250;</router-link></div>
                </div>
            </form>
  </div>
  
</template>

<script >
// @ is an alias to /src

export default {
  
}
</script>
<style scoped>
fieldset {
    border: 2px solid  #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 25px 25px;
  }
.previous,.next{   
     margin: 15px 15px;

    text-decoration: none;
}
input{
    border-left:0px
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

</style>
