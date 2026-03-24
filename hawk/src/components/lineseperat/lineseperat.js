import styles from './lineseperat.module.css';

function Lineseparat (){
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
   return(
    <>
       <div className="header, hidden">
  <div className="progress-container">
    <div className="progress-bar" id="myBar"></div>
  </div>  
  </div>
    </>
)

}

export default Lineseparat;