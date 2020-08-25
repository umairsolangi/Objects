// Basic Level:
// Question No 01
// How will you access the third position of the following array?
let arr = [5, 10, 15]
console.log(arr[2])



// Question NO 02
// How will you access the second element, degree from the following object?
let obj = { name: "Maimoona", degree: "MBBS" }
console.log(obj.degree)



// Question 3
// How will you access all elements of the following array using loops?
let arr1 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++) { console.log(arr1[i]) };


// Question 4
// How will you access all elements of the following object using loops?
  let obj1 = { name: "Maimoona", degree: "MBBS", age: 25 }
  for (const objProperty in obj1) {
    console.log(`${objProperty}: ${obj1[objProperty]}`);
}




//Intermediate Level
// Students' Names and Hobbies Data
// Given an array of students:
let students = [
  {
      name: "Amna",
      hobbies: ["eating", "cooking"]
  },
  {
      name: "Daniyal",
      hobbies: ["arts", "shopping"]
  },
  {
      name: "Fahad",
      hobbies: ["coding", "cooking"]
  },
  {
      name: "Hajra",
      hobbies: ["sleep", "reading"]
  }
];

students.forEach(function (hobby) { console.log(`${hobby.name} of ${hobby.hobbies}`) });




// Extensive Students' Data
// Given this array of Students

            let students = [
                {
                name: "Amna",
                gender: "f",
                dob: new Date("02-04-1990"),
                address: {
                    ilaqa: "Gulistan-e-Johar",
                    city: "Karachi",
                    country: "Pakistan",
                    postalCode: 47114
                },
                phoneNo: "0331-2324243",
                admissionTestScore: 56,
                hasInternet: true,
                hasComputer: false,
                hasJob: true,
                hasSchoolBefore: false
                },
                {
                name: "Hadia",
                gender: "f",
                dob: new Date("05-15-1984"),
                address: {
                    ilaqa: "Lyari",
                    city: "Karachi",
                    country: "Pakistan",
                    postalCode: 75660
                },
                phoneNo: "0345-3452953",
                admissionTestScore: 48,
                hasInternet: false,
                hasComputer: false,
                hasJob: false,
                hasSchoolBefore: true
                },
                {
                name: "Ahmed",
                gender: "m",
                dob: new Date("06-27-2002"),
                address: {
                    ilaqa: "University Road",
                    city: "Quetta",
                    country: "Pakistan",
                    postalCode: 82215
                },
                phoneNo: "0333-0124325",
                admissionTestScore: 33,
                hasInternet: true,
                hasComputer: false,
                hasJob: false,
                hasSchoolBefore: false
                },
                {
                name: "Fariha",
                gender: "f",
                dob: new Date("09-13-1998"),
                address: {
                    ilaqa: "University Road",
                    city: "Karachi",
                    country: "Pakistan",
                    postalCode: 82215
                },
                phoneNo: "0331-9432532",
                admissionTestScore: 33,
                hasInternet: true,
                hasComputer: false,
                hasJob: false,
                hasSchoolBefore: false
                },
                {
                name: "Abdullah",
                gender: "m",
                dob: new Date("01-24-1972"),
                address: {
                    ilaqa: "Bazar Colony",
                    city: "Lahore",
                    country: "Pakistan",
                    postalCode: 32212
                },
                phoneNo: "0345-9912121",
                admissionTestScore: 33,
                hasInternet: false,
                hasComputer: false,
                hasJob: true,
                hasSchoolBefore: true
                }
            ];

  
  for(let i = 0 ; i<students.length;i++){
    console.log( students[i].name);
    console.log( students[i].gender);
     console.log(students[i].address["city"]);
     console.log(students[i].admissionTestScore);
 };

 
  
  for(let f = 0 ; f<students.length;f++){
    if(students[f].gender == "f"){
        console.log( (students[f].name ));
    }
}


 
for(let m = 0 ; m<students.length;m++){
    if(students[m].gender == "m"){
        console.log( (students[m].name ));
    }
} 



for(let num = 0 ; num < students.length ; num++){
   if(students[num]. admissionTestScore >= 50){
       console.log("name of student who pass test " + students[num].name) 
   }
}



for(let eligible = 0 ; eligible < students.length ; eligible++){
    if(students[eligible].hasInternet == true && students[eligible].address.city == "Karachi" ){
        console.log("Students who are eligible " + students[eligible].name);
    }
}


 
for(let adres = 0 ; adres < students.length ; adres++){
  console.log("name of student with adress " + students[adres].name + " address");
  console.log("name of student with adress " + students[adres].address.ilaqa +  ' in ' + students[adres].address.city + ' ,' + students[adres].address.country); 
} 



for(let u = 0 ; u < students.length ; u++){
   if(students[u]. phoneNo == "0331-2324243" || students[u].phoneNo == "0333-0124325" || students[u].phoneNo == "0331-9432532" ){
       console.log("name of student who have ufone number " + students[u].name) 
   }
}



for(let grpb =  0 ; grpb < students.length ; grpb++){
   if(students[grpb].hasJob == true){
       console.log("name of student who have job are in Group B " + students[grpb].name) 
   }
   else{
    console.log("name of student who have job are in Group A " + students[grpb].name) 
   }
}



let currentYear = new Date().getFullYear();

for(let age = 0 ; age < students.length ; age++){
    console.log(students[age].name + " age is " + (currentYear - students[age].dob.getFullYear()) + " years" );
}



let a = [30,36,18,22,48];
console.log(`Longest video ${Math.max.apply(null,ageOfStudent)}`); 




// // Videos Data Task
// // Use this array of Youtube videos (You can add more video Object to this array):


let videos = [
  {
  title: "Photoshop tutorial",
  lengthInMinutes: 70,
  category: "Education",
  uploadDate: new Date("07-22-2019"),
  tags: "design, digital, photoshop, creativity",
  features: ["Live", "360°", "HDR"],
  viewCount: 4700,
  rating: 4.3
  },
  {
  title: "Episode # 01 - The Best Comedy Show",
  lengthInMinutes: 19,
  category: "Entertainment",
  uploadDate: new Date("07-03-2019"),
  tags: "comedy, funny",
  features: ["Subtitles/CC", "3D", "HD"],
  viewCount: 145615,
  rating: 3.9
  },
  {
  title: "How to use FOR EACH loop - tutorial by Tech Karo",
  lengthInMinutes: 6,
  category: "Education",
  uploadDate: new Date("11-10-2018"),
  tags: "javascript, loops, web development",
  features: ["Purchased", "HD"],
  viewCount: 9004,
  rating: 4.5
  },
];


for (let d = 0; d < videos.length; d++) {
  console.log(`Title: ${videos[d].title}`);
  console.log(`Length: ${videos[d].lengthInMinutes}`)
  console.log(`Category: ${videos[d].category}`)
  console.log(`View: ${videos[d].Views}`)
  console.log(`Upload: ${videos[d].uploadDate}`)
  console.log(`Rating: ${videos[d].rating}`);
}



for(let mint=0;mint<videos.length;mint++){
  if(videos[mint].lengthInMinutes < 3){
      console.log(`short title ${videos[mint].title}`);
  }
}



for(let m=0;m<videos.length;m++){
  if(videos[m].lengthInMinutes > 20){
      console.log(`long title ${videos[m].title}`);
  }
}



for(let meduim=0;meduim<videos.length;meduim++){
      if(videos[meduim].lengthInMinutes > 3 && videos[meduim].lengthInMinutes < 20){
          console.log(`meduim mint title ${videos[meduim].title}`);
      }
}



let lengthInMint = [70,19,6,3,1,10,2,2.5,0.5,90,39,60,2];
console.log(`Longest video ${Math.max.apply(null,lengthInMint)}`); 




for (let edu = 0; edu < videos.length; edu++) {
  if (videos[edu].category === 'Education') {
      console.log(videos[edu].title);
  }
}



for (let t = 0; t < videos.length; t++) {
  if (videos[t].tags === "javascript, loops, web development") {
      console.log(videos[t].title);
  }
}

videos.forEach(js => {
  if (js.tags == 'javascript') {
      console.log(js.title);
  }
})




videos.forEach(function(video){video.features.forEach(function(feature){
  if(feature=="HD"){
      console.log(video.title);
  }})});





for (let t = 0; t < videos.length; t++) {
  if (videos[t].uploadDate.getDate() == "21") {
      console.log(`title which videos upload today ${videos[t].title}`);
  }
}


new Date().getDay();



for (let month = 0; month < videos.length; month++) {
  if (videos[month].uploadDate.getMonth()+1 == "08") {
      console.log(`title which videos upload this month ${videos[month].title}`);
  }
}



for (let y = 0; y < videos.length; y++) {
  if (videos[y].uploadDate.getFullYear() == "2020") {
      console.log(`title which videos upload this year ${videos[y].title}`);
  }
}



videos.sort(function(a, b) {
  return parseFloat(a.viewCount) - parseFloat(b.viewCount);
}).forEach(video=>{console.log(video.title)});;



videos.sort(function(c, d) {
  return  parseFloat(c.rating) - parseFloat(d.rating); 
}).forEach(video=>{console.log(video.title)});




// Advance Level
// The Recipe Card
let recipe = {
  title: "Lab e Sheeri",
  serving: 1,
  ingredients: ["Biryaaani", "Singhpurian Rise", "Karahi", "Spices", "Mayonise"],
};
console.log(`* ${recipe.title}`);
console.log(`* Serves: ${recipe.serving}`);
console.log(`* Ingredients`);
recipe.ingredients.forEach(function (value) {
  console.log(` > ${value}`);
});



// The Reading List
let readingList = [
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: false,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    alreadyRead: false,
  },
];

readingList.forEach(function (value) {
  if (value.alreadyRead == true) {
    console.log(`You already read "${value.title}"`);
  } else {
    console.log(`You still need to read "${value.title}"`);
  }
});

