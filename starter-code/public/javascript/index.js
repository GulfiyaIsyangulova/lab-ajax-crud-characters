// const charactersAPI = new APIHandler("http://localhost:8000")

// $(document).ready( () => {
//   document.getElementById('fetch-all').onclick = function(){

//   }
$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    let list = document.getElementById('characters-container')
    console.log(list)

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response) => {


        list.innerHTML = "";
        response.data.forEach((eachOne) => {

          let newChar = document.createElement('div');
          newChar.setAttribute("class", "character-info");

          newChar.innerHTML = `
        <div class="name">Character Name: <span class="each-info">${eachOne.name}</span></div>
        <div class="occupation">Character Occupation: <span class="each-info">${eachOne.occupation}</span></div>
        <div class="debt">Does it have debt? <span class="each-info">${eachOne.debt}</span></div>
        <div class="weapon">Character Weapon: <span class="each-info">${eachOne.weapon}</span></div>
        `

          list.appendChild(newChar);
          // response.data.name = document.getElementsByClassName("name").value;
          // response.data.occupation = document.getElementsByClassName("occupation").value;
          // response.data.cartoon = document.getElementsByClassName("cartoon").value;
          // response.data.weapon = document.getElementsByClassName("weapon").value;

        })


      })
      .catch((err) => {
        console.log(err);
      })

  }

  document.getElementById('fetch-one').onclick = function () {
    let characterId = document.getElementById('character-id').value;
    let character = document.getElementById('characters-container')
    console.log(character)

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response) => {


        character.innerHTML = "";

        let char = response.data[characterId];
        let newChar = document.createElement('div');
        newChar.setAttribute("class", "character-info");

        newChar.innerHTML = `
      <div class="name">Character Name: <span class="each-info">${char.name}</span></div>
      <div class="occupation">Character Occupation: <span class="each-info">${char.occupation}</span></div>
      <div class="debt">Does it have debt? <span class="each-info">${char.debt}</span></div>
      <div class="weapon">Character Weapon: <span class="each-info">${char.weapon}</span></div>
      `
        character.appendChild(newChar);

      })
      .catch((err) => {
        console.log(err);
      })

  }

  //=============================================================================//

  document.getElementById('add-new-character').onclick = () => {
   

    let name = document.getElementById('new-name').value;
    let occupation = document.getElementById('new-occupation').value;
    let weapon = document.getElementById('new-weapon').value;

    let debt = document.getElementById('new-debt').checked;
    let newCharacter = document.getElementById('new-character-div');
    let id= document.getElementById('character-id').value;


    axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,
      id: id

    })
      .then((response) => {
        console.log('yay')

        document.getElementById('new-name').value = "";
        document.getElementById('new-occupation').value = "";
        document.getElementById('new-weapon').value = "";
        document.getElementById('new-debt').checked = false;


        newCharacter.innerHTML = "";

        let char = response.data[id];
        let newCharNew = document.createElement('div');
        newCharNew.setAttribute("class", "character-info-new");

        newCharNew.innerHTML = `
      <div class="name"> New Character <br/><span class="each-info">${name}</span></div>
      <div class="occupation"> <span class="each-info">${occupation}</span></div>
      <div class="debt">
      <span class="each-info">${debt}</span></div>
      <div class="weapon"><span class="each-info">${weapon}</span></div>
      `
        newCharacter.appendChild(newCharNew);



      })
      .catch((err) => {

        console.log(err);
      })


  }
 ////=========================================================================================//

  document.getElementById('send-data').onclick = function () {
    let newCharacter = document.getElementById('new-character-div');
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occupation').value;
    let weapon = document.getElementById('edit-weapon').value;
    let debt = document.getElementById('edit-debt').checked;

    
    // let newCharacter = document.getElementById('new-character-div');
    let id = document.getElementById('edit-id').value;

    axios.put('https://ih-crud-api.herokuapp.com/characters/'+id, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,

    })
      .then((response) => {
        console.log('yay3')

        // document.getElementsByClassName("name").value = response.data.name;
        //   response.data.occupation = document.getElementsByClassName("occupation").value;
        //   response.data.cartoon = document.getElementsByClassName("debt").value;
        //    response.data.weapon = document.getElementsByClassName("weapon").value;


        document.getElementById('new-name').value = "";
        document.getElementById('new-occupation').value = "";
        document.getElementById('new-weapon').value = "";
        document.getElementById('new-debt').checked = false;

        newCharacter.innerHTML = "";

        let char = response.data[id];
        let newCharNew = document.createElement('div');
        newCharNew.setAttribute("class", "character-info-new");

        newCharNew.innerHTML = `
      <div class="name"> New Character <br/><span class="each-info">${name}</span></div>
      <div class="occupation"> <span class="each-info">${occupation}</span></div>
      <div class="debt">
      <span class="each-info">${debt}</span></div>
      <div class="weapon"><span class="each-info">${weapon}</span></div>
      `
        newCharacter.appendChild(newCharNew);
      //   newCharacter.innerHTML = "";

      //   let char = response.data[id];
      //   let newCharNew = document.createElement('div');
      //   newCharNew.setAttribute("class", "character-info-new");

      //   newCharNew.innerHTML = `
      // <div class="name"> New Character <br/><span class="each-info">${name}</span></div>
      // <div class="occupation"> <span class="each-info">${occupation}</span></div>
      // <div class="debt">
      // <span class="each-info">${debt}</span></div>
      // <div class="weapon"><span class="each-info">${weapon}</span></div>
      // `
      //   newCharacter.appendChild(newCharNew);



        ////=============================//
      })
      .catch((err) => {

        console.log(err);
      })


  }

  

})