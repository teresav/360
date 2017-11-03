/*
we need three things: scene, camera and renderer
*/

//scene
var scene = new THREE.Scene();
console.log(scene);

//camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500);
// camera.position.z = 1;

//renderer
var renderer = new THREE.WebGLRenderer({antialias: false, alpha: false});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//light
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );


//add cube
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
// var cube = new THREE.Mesh( geometry, material );
// cube.position.x = -3;
// scene.add( cube );

//sphere
var geometry = new THREE.SphereGeometry( 2, 16, 16 );
for ( var i = 0; i < geometry.faces.length; i ++ ) {

    var face = geometry.faces[ i ];
    face.color.setHex( Math.random() * 0xffffff );

}

var sphere = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, side:THREE.BackSide} ));
scene.add( sphere );

//render the scene!
function animate() {
	requestAnimationFrame( animate );
  // cube.rotation.x += 0.03;
  // cube.rotation.y += 0.03;
  sphere.rotation.x += 0.0001;
  sphere.rotation.y -= 0.0001;
	renderer.render( scene, camera );
}
animate();
