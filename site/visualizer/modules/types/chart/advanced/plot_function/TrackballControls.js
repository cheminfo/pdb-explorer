THREE.TrackballControls=function(a,b){function c(a){l.enabled!==!1&&(window.removeEventListener("keydown",c),p=o,o===m.NONE&&(a.keyCode!==l.keys[m.ROTATE]||l.noRotate?a.keyCode!==l.keys[m.ZOOM]||l.noZoom?a.keyCode!==l.keys[m.PAN]||l.noPan||(o=m.PAN):o=m.ZOOM:o=m.ROTATE))}function d(a){l.enabled!==!1&&(o=p,window.addEventListener("keydown",c,!1))}function e(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o===m.NONE&&(o=a.button),o!==m.ROTATE||l.noRotate?o!==m.ZOOM||l.noZoom?o!==m.PAN||l.noPan||(x=l.getMouseOnScreen(a.pageX,a.pageY,x),y.copy(x)):(t=l.getMouseOnScreen(a.pageX,a.pageY,t),u.copy(t)):(r=l.getMouseProjectionOnBall(a.pageX,a.pageY,r),s.copy(r)),document.addEventListener("mousemove",f,!1),document.addEventListener("mouseup",g,!1),l.dispatchEvent(A))}function f(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o!==m.ROTATE||l.noRotate?o!==m.ZOOM||l.noZoom?o!==m.PAN||l.noPan||(y=l.getMouseOnScreen(a.pageX,a.pageY,y)):u=l.getMouseOnScreen(a.pageX,a.pageY,u):s=l.getMouseProjectionOnBall(a.pageX,a.pageY,s))}function g(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o=m.NONE,document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",g),l.dispatchEvent(B))}function h(a){if(l.enabled!==!1){a.preventDefault(),a.stopPropagation();var b=0;a.wheelDelta?b=a.wheelDelta/40:a.detail&&(b=-a.detail/3),t.y+=.01*b,l.dispatchEvent(A),l.dispatchEvent(B)}}function i(a){if(l.enabled!==!1){switch(a.touches.length){case 1:o=m.TOUCH_ROTATE,s.copy(l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,r));break;case 2:o=m.TOUCH_ZOOM;var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;w=v=Math.sqrt(b*b+c*c);break;case 3:o=m.TOUCH_PAN,y.copy(l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,x));break;default:o=m.NONE}l.dispatchEvent(A)}}function j(a){if(l.enabled!==!1)switch(a.preventDefault(),a.stopPropagation(),a.touches.length){case 1:s=l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,s);break;case 2:var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;w=Math.sqrt(b*b+c*c);break;case 3:y=l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,y);break;default:o=m.NONE}}function k(a){if(l.enabled!==!1){switch(a.touches.length){case 1:r.copy(l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,s));break;case 2:v=w=0;break;case 3:x.copy(l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,y))}o=m.NONE,l.dispatchEvent(B)}}var l=this,m={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM:4,TOUCH_PAN:5};this.object=a,this.domElement=void 0!==b?b:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.noRoll=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var n=new THREE.Vector3,o=m.NONE,p=m.NONE,q=new THREE.Vector3,r=new THREE.Vector3,s=new THREE.Vector3,t=new THREE.Vector2,u=new THREE.Vector2,v=0,w=0,x=new THREE.Vector2,y=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var z={type:"change"},A={type:"start"},B={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{this.screen=this.domElement.getBoundingClientRect();var a=this.domElement.ownerDocument.documentElement;this.screen.left+=window.pageXOffset-a.clientLeft,this.screen.top+=window.pageYOffset-a.clientTop}},this.handleEvent=function(a){"function"==typeof this[a.type]&&this[a.type](a)},this.getMouseOnScreen=function(a,b,c){return(c||new THREE.Vector2).set((a-l.screen.left)/l.screen.width,(b-l.screen.top)/l.screen.height)},this.getMouseProjectionOnBall=function(){var a=new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3((b-.5*l.screen.width-l.screen.left)/(.5*l.screen.width),(.5*l.screen.height+l.screen.top-c)/(.5*l.screen.height),0),f=e.length();return l.noRoll?f<Math.SQRT1_2?e.z=Math.sqrt(1-f*f):e.z=.5/f:f>1?e.normalize():e.z=Math.sqrt(1-f*f),q.copy(l.object.position).sub(l.target),d.copy(l.object.up).setLength(e.y),d.add(a.copy(l.object.up).cross(q).setLength(e.x)),d.add(q.setLength(e.z)),d}}(),this.rotateCamera=function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(){var c=Math.acos(r.dot(s)/r.length()/s.length());c&&(a.crossVectors(r,s).normalize(),c*=l.rotateSpeed,b.setFromAxisAngle(a,-c),q.applyQuaternion(b),l.object.up.applyQuaternion(b),s.applyQuaternion(b),l.staticMoving?r.copy(s):(b.setFromAxisAngle(a,c*(l.dynamicDampingFactor-1)),r.applyQuaternion(b)))}}(),this.zoomCamera=function(){if(o===m.TOUCH_ZOOM){var a=v/w;v=w,q.multiplyScalar(a)}else{var a=1+(u.y-t.y)*l.zoomSpeed;1!==a&&a>0&&(q.multiplyScalar(a),l.staticMoving?t.copy(u):t.y+=(u.y-t.y)*this.dynamicDampingFactor)}},this.panCamera=function(){var a=new THREE.Vector2,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.copy(y).sub(x),a.lengthSq()&&(a.multiplyScalar(q.length()*l.panSpeed),c.copy(q).cross(l.object.up).setLength(a.x),c.add(b.copy(l.object.up).setLength(a.y)),l.object.position.add(c),l.target.add(c),l.staticMoving?x.copy(y):x.add(a.subVectors(y,x).multiplyScalar(l.dynamicDampingFactor)))}}(),this.checkDistances=function(){l.noZoom&&l.noPan||(q.lengthSq()>l.maxDistance*l.maxDistance&&l.object.position.addVectors(l.target,q.setLength(l.maxDistance)),q.lengthSq()<l.minDistance*l.minDistance&&l.object.position.addVectors(l.target,q.setLength(l.minDistance)))},this.update=function(){q.subVectors(l.object.position,l.target),l.noRotate||l.rotateCamera(),l.noZoom||l.zoomCamera(),l.noPan||l.panCamera(),l.object.position.addVectors(l.target,q),l.checkDistances(),l.object.lookAt(l.target),n.distanceToSquared(l.object.position)>0&&(l.dispatchEvent(z),n.copy(l.object.position))},this.reset=function(){o=m.NONE,p=m.NONE,l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.up.copy(l.up0),q.subVectors(l.object.position,l.target),l.object.lookAt(l.target),l.dispatchEvent(z),n.copy(l.object.position)},this.domElement.addEventListener("contextmenu",function(a){a.preventDefault()},!1),this.domElement.addEventListener("mousedown",e,!1),this.domElement.addEventListener("mousewheel",h,!1),this.domElement.addEventListener("DOMMouseScroll",h,!1),this.domElement.addEventListener("touchstart",i,!1),this.domElement.addEventListener("touchend",k,!1),this.domElement.addEventListener("touchmove",j,!1),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",d,!1),this.handleResize()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype);