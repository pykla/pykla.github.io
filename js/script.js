//Script to pull Community members from GitHub

const loadPyklaMembers = async () => {
    const response = await fetch('https://api.github.com/orgs/pykla/members');
    const PyklaList = await response.json(); //extract JSON from the http response
    fullList = {};
    var fullList = JSON.stringify(PyklaList); // Turn to JSON
    var fullList = JSON.parse(fullList); //turn to Object

    //get number of users
    var numberOfMembers = fullList.length;
    

    //Extract all public members of the GitHub organisation

    var iteration = 0; //Start from zero
    while (iteration <= numberOfMembers){
    
      var avatar = (fullList[iteration].avatar_url);
      var user = fullList[iteration].login;
      var url = fullList[iteration].html_url;

      //Create dynamic image tag
      var image_style = '<img ';
      var image_attribute0 = 'title="'+ user + '"';
      var image_attribute1 = 'class="avatar" ';
      var image_attribute2 = 'src="'+ avatar + '" />';
      var imageTag = image_style + image_attribute0 + image_attribute1 + image_attribute2;

      //
      var TeamList = document.getElementById('team');
      var member = document.createElement('a');
      member.setAttribute('href', url);
      member.setAttribute('class', 'white-bg');
      member.innerHTML = imageTag ;
      TeamList.appendChild(member);

      iteration++;

      
      
    }
    
  }

