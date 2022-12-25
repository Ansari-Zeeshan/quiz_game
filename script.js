const quizDB = [
	{
		question: 'Q1. What is the full form of HTML',
		a: 'Hyper Link Markup Language',
		b: 'Hyper Text Markup Language',
		c: 'Hyper Transform Markup Language',
		d: 'Hyper Time More Language',
		ans: 'ans2'
	},
	{
		question:'Q2. What is PHP',
		a:'Front End Language',
		b:'Front End Tool',
		c:'Back End Language',
		d:'High Level Langauge',
		ans:'ans3'
	},
	{
		question:'Q3. What is JS',
		a:'Junior Script',
		b:'Java System',
		c:'Jubilee Source',
		d:'JavaScript',
		ans:'ans4'
	},
	{
		question:'Q4. What is Java',
		a:'Programming Language',
		b:'System Tool',
		c:'Web Language',
		d:'Database',
		ans:'ans1'
	},
	];

	const quizDB2 = [
	{
		question: 'Q1. Which Tag is not supported in HTML5',
		a: '<center>',
		b: '<caption>',
		c: '<map>',
		d: '<label>',
		ans: 'ans1'
	},
	{
		question:'Q2. Which is the Framework of PHP',
		a:'Django',
		b:'Angular',
		c:'Laravel',
		d:'Node.js',
		ans:'ans3'
	},
	{
		question:'Q3. Correct way to link external JS File abc.js',
		a:'<script href="#abc.js">',
		b:'<script link="#abc.js" type="script">',
		c:'<script src="/abc.js">',
		d:'None of the Above',
		ans:'ans3'
	},
	{
		question:'Q4. Choose the correct HTML element for the largest heading',
		a:'<h1>',
		b:'<h6>',
		c:'<bighead>',
		d:'<bigText>',
		ans:'ans1'
	},
	];

	const quizDB3 = [
	{
		question: 'Q1. What is the use <p> tag',
		a: 'Align Text',
		b: 'Giving Color',
		c: 'Making Paragraph',
		d: 'Align Text in center',
		ans: 'ans3'
	},
	{
		question:'Q2. Which tag is used to align text in center',
		a:'<text-align="center">',
		b:'<text-align="middle">',
		c:'<align-text="center">',
		d:'<text-decoration="center">',
		ans:'ans1'
	},
	{
		question:'Q3. How to decalre variable in JavaScript',
		a:'let,var,const',
		b:'assume,variable',
		c:'let,var',
		d:'Both a & c',
		ans:'ans4'
	},
	{
		question:'Q4. What is the use of background-position: property in CSS',
		a:'To give a image URL',
		b:'To change the position of text',
		c:'To align image in background',
		d:'To make image larger',
		ans:'ans3'
	},
	];

	const question = document.querySelector('.question');
	const option2 = document.querySelector('#option2');
	const timer = document.querySelector('.timer');
	const timeon = document.querySelector('.timeon');
	const music = document.querySelector('audio');
	const option1 = document.querySelector('#option1');
	const option3 = document.querySelector('#option3');
	const option4 = document.querySelector('#option4');
	const submit = document.querySelector('#submit');
	const h4 = document.querySelector('.d-flex h4');
	const timeh3 = document.querySelector('.timeon h3');
	const answers = document.querySelectorAll('input');
	const showScore = document.querySelector('#showScore');
	const skip = document.querySelector('#skip');
	const goback = document.querySelector('#goback');
	const ul = document.querySelector('ul');
 
    let questionCount = 0;
    let score = 0;
    let wrong = 0;
    let skipclick = 0;
    let duration = 60;
    let countdown;
    let isPlaying=false;
    let level2=0;
    let lev2=1;
    
    const songs=[
    {
    	name: "Music3",
    	title: 'Lotus Lane',
    	artist: 'The Loyalist'
    },
    {
    	name: "beep",
    	title: 'Eyes of Glory',
    	artist: 'Akash Gandhi'
    }]

    const timerFun=()=>
    {
        let sec = 0;
        let i = 0;
        countdown = setInterval(()=>
        {
          if(i<45)    
          {
            sec+=1;
            const count = duration - sec;
            i+=1;
            if(level2==1)
            {
            	timer.innerHTML=`Times Remaining: ${count}`;
            	return;
            }
            else if(level2==2)
        	{
	        	timer.innerHTML=`Times Remaining: ${count}`;
	        	return;
            }
            timer.innerHTML=`${count}`;
          }
          else if(i<60)
          {
            sec+=1;
            const count = duration - sec;
            loadSongs(songs[1]);
            music.play();
            i+=1;
            timeh3.innerHTML="";
            timer.innerHTML=`<h3 style="color:red; font-size:1.7rem;  margin-top:-10px;">Hurry Up! Only ${count} seconds left <img src="img/alarm.gif" width="30" height="30">`;
          }
          else {
          	    music.pause();
          	    clear();
          	    output2();
            }  
        },1000)
    }   
    window.addEventListener('load',timerFun);

    function clear()
    {
        clearInterval(countdown);
        timer.innerHTML='';
    }
    function loadSongs(song)
    {
        music.src="Song/"+song.name+".mp3";
    }

	const loadquestion=()=>
	{
	   let inner = document.querySelector('.inner-div');		
	   inner.classList.add('active');
	   ul.classList.remove('hide');	
	   submit.classList.remove('hide');
	   if(level2==1)
	   {
          const Qlist=quizDB2[questionCount];
          question.innerText=Qlist.question;
          option1.innerText=Qlist.a;
          option2.innerText=Qlist.b;
          option3.innerText=Qlist.c;
          option4.innerText=Qlist.d;
          return;
	   }
	   else if(level2 == 2)
	   {
	   	  const Qlist=quizDB3[questionCount];
          question.innerText=Qlist.question;
          option1.innerText=Qlist.a;
          option2.innerText=Qlist.b;
          option3.innerText=Qlist.c;
          option4.innerText=Qlist.d;
          return;
	   }
	   const Qlist = quizDB[questionCount];
       question.innerText=Qlist.question;
       option1.innerText=Qlist.a;
       option2.innerText=Qlist.b;
       option3.innerText=Qlist.c;
       option4.innerText=Qlist.d;
	}
	loadquestion();
 
  	submit.addEventListener('click', ()=>
	{
		let count=0;
		for(let i=0;i<answers.length;i++)
		{
           if(answers[i].checked)
           {
           	  count++;
           	  break;
           }
		}
		if(count==1)
		{
			if(level2==1)
			{
				checklevel2();
				return;
			}
			else if(level2==2)
			{
				checklevel2();
				return;
			}
		    let inner = document.querySelector('.inner-div');	
		    inner.classList.remove('active');
			if(isPlaying)
			{
				music.pause();
				isPlaying=false;
			}
			else
			{
			    music.play();
			    isPlaying=true;	
			}
			const checkanswer = getcheckAnswered();
			if(checkanswer===quizDB[questionCount].ans)
			{
				score++;
			}
			else if(checkanswer!==quizDB[questionCount].ans)
			{
				wrong++;
			}
			deselectall();
			questionCount++;
            goback.classList.remove('hide');
			if(questionCount<quizDB.length)
			{
				loadquestion();
			}
			else
			{
			    output();
			}
		}
		else
		{
			alert('Please Select Atleast 1 option');
			return false;
		}
		
	})
	function checklevel2()
	{
		if(isPlaying)
		{
			music.pause();
			isPlaying=false;
		}
		else
		{
		    music.play();
		    isPlaying=true;	
		}
        goback.classList.remove('hide');

		if(level2==2)
		{
			let checkanswer = getcheckAnswered();
		    if(checkanswer===quizDB3[questionCount].ans)
		    {
			   score++;
		    }
		    else if(checkanswer!==quizDB3[questionCount].ans)
		    {
			   wrong++;
		    }
		    questionCount++;
		    deselectall();
		    if(questionCount<quizDB3.length)
		    {
			 loadquestion();
		    }
		    else
		    {
		     output();
		    }
		  return; 
		}

		let checkanswer = getcheckAnswered();
		if(checkanswer===quizDB2[questionCount].ans)
		{
			score++;
		}
		else if(checkanswer!==quizDB2[questionCount].ans)
		{
			wrong++;
		}

		questionCount++;
		deselectall();
		console.log(questionCount);
		if(questionCount<quizDB2.length)
		{
			loadquestion();
		}
		else
		{
		    output();
		}
	}

	 music.addEventListener('timeupdate',(e)=>
	 {
      let {currentTime}=e.srcElement;
      let {duration}=e.srcElement;
      let newduration = Math.floor(duration - 1);
      if(isPlaying)
      {
      	if(currentTime<newduration)
  		{
  	     music.play();      		      			
  		}
  		else
        {
         music.currentTime=0;
  	     music.pause();
  	     isPlaying=false;
        }
      }
     });	
	
	skip.addEventListener('click', ()=>
	{
		skipclick+=1;
		h4.innerText=`Skip ${skipclick}`;
		deselectall();
		questionCount++;
		goback.classList.remove('hide');
		goback.innerText="Back";
		if(questionCount<quizDB.length)
		{
			loadquestion();
		}
		else
		{
			
			output();
		}
	})

	function output()
	{
		clear();
		ul.classList.add('hide');
		question.classList.add('hide');
		showScore.innerHTML=`<h3>Right Answer is ${score}, Wrong answer is ${wrong} & You skip ${skipclick} question</h3> <button class="btn" onclick="location.reload()">Play Again!</button>`;
		showScore.classList.remove('scoreArea');
		submit.classList.add('hide');
		skip.classList.add('hide');
		goback.classList.add('hide');
		timeh3.innerHTML="";
		h4.innerHTML="";
		if(score==4)
		{
			output3();
		}
		else if(score==8)
		{
			output3();
		}
	}

	function output2()
	{
		ul.classList.add('hide');
		question.classList.add('hide');
		showScore.innerHTML=`<span>Your Times Up!</span> <h3>Right Answer is ${score}, Wrong answer is ${wrong} & You skip ${skipclick} question</h3> <button class="btn" onclick="location.reload()">Play Again!</button>`;
		showScore.classList.remove('scoreArea');
		submit.classList.add('hide');
		skip.classList.add('hide');
		goback.classList.add('hide');
		h4.innerText="";
	}
    function output3()
    {
    	lev2+=1;
    	ul.classList.add('hide');
		question.classList.add('hide');
		showScore.innerHTML=`<h3>Congratulations! Your all answers is correct Your Score is ${score}, You can now play Level ${lev2}</h3> <button class="btn" onclick="loadGame()">Next Level</button>`;
		showScore.classList.remove('scoreArea');
		submit.classList.add('hide');
		skip.classList.add('hide');
		goback.classList.add('hide');
		h4.innerText="";
    }
    function loadGame() {
    	 level2+=1;
    	 questionCount=0;
		 submit.classList.remove('hide');
	     skip.classList.remove('hide');
	     question.classList.remove('hide');
		 showScore.classList.add('scoreArea');
	   	 timerFun();
         loadquestion();
    }
	goback.addEventListener('click', ()=>
	{
		questionCount--;
		if(skipclick!==0)
		{
			skipclick-=1;
			h4.innerText=`Skip ${skipclick}`;
		}
		if(score!==0)
		{
			score-=1;
		}
		if(wrong!==0)
		{
			wrong-=1;
		}
		if(questionCount==0)
		{
			loadquestion();
			goback.classList.add('hide');
		}
		else if(questionCount<3)
		{
		    loadquestion();
		}
		else
		{
			goback.classList.add('hide');
		}

	})
	function deselectall()
	{
		answers.forEach((val)=> 
		{
			val.checked=false;
		});
	}

	function getcheckAnswered()
	{
		let answer;
        answers.forEach((curr)=>
        {
           if(curr.checked)
           {
             answer = curr.id;
           }
        })
        return answer;
	}