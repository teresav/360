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
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//lights
var light = new THREE.HemisphereLight( 0xaa0000, 0x0000ff, 2 );
scene.add( light );

var light = new THREE.PointLight( 0x9900B6, 2, 100 );
light.position.set( 3, 3, 0 );
scene.add( light );



//add cube
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
// var cube = new THREE.Mesh( geometry, material );
// cube.position.x = -3;
// scene.add( cube );

//sphere
var geometry = new THREE.SphereGeometry( 2, 128, 128 );
for ( var i = 0; i < geometry.faces.length; i ++ ) {

    var face = geometry.faces[ i ];
    face.color.setHex( Math.random() * 0xffffff );

}

var sphere = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { vertexColors: THREE.FaceColors, side:THREE.BackSide, metalness:.4, roughness:0} ));
scene.add( sphere );

//render the scene!
function animate() {
	requestAnimationFrame( animate );
  // cube.rotation.x += 0.03;
  // cube.rotation.y += 0.03;
  sphere.rotation.x += 0.003;
  sphere.rotation.y -= 0.003;
	renderer.render( scene, camera );
}
animate();
