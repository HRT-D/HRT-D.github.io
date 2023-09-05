(function (argument) {
	var table = [
				"images/1.jpg",
				 "1",
				 "湖南 长沙",
				 "大三",
				 "清华大学",
				 "男",
				 "计算机科学与技术",
				 "从学校实验室开始接触前端，",

				"images/1.jpg",
				 "2",
				 "湖南 长沙",
				 "大三",
				 "清华大学",
				 "男",
				 "计算机科学与技术",
				 "从学校实验室开始接触前端，",

				"images/1.jpg",
				 "3",
				 "浙江 杭州",
				 "大三",
				 "清华大学",
				 "男",
				 "计算机科学与技术",
				 "从学校实验室开始接触前端，",

				"images/1.jpg",
				 "4",
				 "黑龙江 哈尔滨",
				 "大四",
				 "清华大学",
				 "男",
				 "计算机科学与技术",
				 "从学校实验室开始接触前端，",

				"images/1.jpg",
				"5",
				"北京",
				"大四",
				"清华大学",
				"男",
				"计算机科学与技术",
				"从学校实验室开始接触前端，",

                "images/1.jpg",
                "6",
                "北京",
                "大四",
                "清华大学",
                "男",
                "计算机科学与技术",
                "从学校实验室开始接触前端，"
			];


			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			//三个监听器
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			document.addEventListener( 'touchmove', onDocumentTouchMove, false );
			document.addEventListener( 'touchstart', onDocumentTouchMove, false );
			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );

			}
			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

                }

			}
			function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                   	mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

                }

            }
			var camera, scene, renderer;
			var controls;
			var elstyle={width:600,height:800,left:0,display:"none",opacity:0};
			var objects = [];
			var targets = [];

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;
				scene = new THREE.Scene();

				var j=0;

				// table
				for ( var i = 0; i < table.length; i += 8 ) {

					var element = document.createElement( 'div' );
					element.className = 'element';
					element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					var img = document.createElement( 'img' );
					img.className = 'img';
					img.src = table[i];
					element.appendChild( img );

					var name = document.createElement( 'div' );
					name.className = 'name';
					name.textContent = table[ i + 1];
					element.appendChild( name );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 2 ] + '<br>' + table[ i + 3 ];
					element.appendChild( details );

					var details1= document.createElement( 'div' );
					details1.className = 'details1';
					details1.innerHTML =' 姓名:'+table[ i + 1 ]+'<br>'+
										'性别:'+table[i+5]+ '<br>' +
										'专业:'+table[i+6]+ '<br>' +
										'教育程度:'+table[ i + 3 ]+'<br>'+
										'所在地:'+table[i+2]+'<br>'+
										'学校:'+table[ i + 4 ];
					details1.style.display="none";
					element.appendChild( details1 );

					var details2= document.createElement( 'div' );
					details2.className = 'details2';
					details2.innerHTML ='个人简介:'+table[ i + 7 ];
					details2.style.display="none";
					element.appendChild( details2 );

					var object = new THREE.CSS3DObject( element );

                    var j=Math.trunc(i/8);
                    //j=table[i+1]
                    j+=1;
                    if(j%5==1) object.position.x=-1600;
                    else if(j%5==2) object.position.x=-800;
                    else if(j%5==3) object.position.x=0;
                    else if(j%5==4) object.position.x=800;
                    else object.position.x=1600;

                    object.position.y=1600-(Math.floor(j/5)+1)*1000;
                    if(j%5==0) object.position.y=1600-(Math.floor(j/5))*1000;
                    object.position.z=3000;
                    //初始化位置
                    //if(j%5==0)
                    //{
                    //    //object.position.x = (2-(j%5))*800;
                    //    object.position.y = -j/5*1000;
                    //    object.position.z = 3000;
                    //}
                    //else{
                    //    //object.position.x = (2-(j%5))*800;
                    //    //object.position.x =(j%5) * 800 -1600;
                    //    object.position.y = (-Math.trunc(j/5)+1)*1000;
                    //    object.position.z = 3000;
                    //}


					scene.add( object );

					objects.push( object );


					//

					var object = new THREE.Object3D();

					if(j%5==1) object.position.x=-1600;
					else if(j%5==2) object.position.x=-800;
					else if(j%5==3) object.position.x=0;
					else if(j%5==4) object.position.x=800;
					else object.position.x=1600;

                    object.position.y=1600-(Math.floor(j/5)+1)*1000;
                    if(j%5==0) object.position.y=1600-(Math.floor(j/5))*1000;

                    //if(j%5==0)
                    //{
                    //
                    //    //object.position.x = (j%5) * 800 -1600;
                    //    //object.position.x = (2-(j%5))*800;
                    //    //object.position.x = -1600;
                    //    object.position.y = -j/5*1000;
                    //}
                    //else{
                    //    //object.position.x = (2-(j%5))*800;
                    //    //object.position.x =(j%5) * 800 -1600;
                    //    //object.position.x = -1600;
                    //    object.position.y = (-Math.trunc(j/5)+1)*1000;
                    //
                    //}


					targets.push( object );

				}


				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );



				transform( targets, 2000 );


				window.addEventListener( 'resize', onWindowResize, false );

			}
			 // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				var oDiv=document.getElementById('container');
				var domnodes=oDiv.firstChild.firstChild.childNodes;
				var active=[];
				var up=0;
				var down=0;
				for (var i = 0; i < domnodes.length; i++) {
					active[i]=0;
					(function (a) {

						domnodes[a].addEventListener('touchstart',mousedownf);
						domnodes[a].addEventListener('touchend',function (argument) {
							if(up==0)
							{
								mouseupf();
							}
						});

						domnodes[a].addEventListener('mousedown',mousedownf);
						domnodes[a].addEventListener('mouseup',function (argument) {
							if(up==0)
							{
								mouseupf();
							}
						});

						function mousedownf(argument) {

							if (down==0) {

								down =1;

							var res=0;
							var tween=new TWEEN.Tween( objects[a].position )
								.to( { z: -100},100)
								.easing( TWEEN.Easing.Exponential.InOut );
							for (var j = 0; j < active.length; j++) {
									// alert(j);
									if (active[j]==1) {
										res=1;
									}
								}
								if (res==0) {
									tween.start();
								}

								setTimeout(function () { down = 0;},2500);
								}
							}

						function mouseupf(argument) {

								up=1;

								var bin=0;
								var res=0;
								for (var j = 0; j < active.length; j++) {
									// alert(j);
									if (active[j]==1) {

										var tweenback2=new TWEEN.Tween( objects[j].rotation )
										.to( { x:0},1000)
										.easing( TWEEN.Easing.Elastic.InOut );

										var x,y
                                        j=j+1;
                                        if(j%5==1) x=-1600;
                                        else if(j%5==2) x=-800;
                                        else if(j%5==3) x=0;
                                        else if(j%5==4) x=800;
                                        else x=1600;

                                        y=1600-(Math.floor(j/5)+1)*1000;
                                        if(j%5==0) y=1600-(Math.floor(j/5))*1000;

                                        j=j-1;

                                        var tweenback=new TWEEN.Tween( objects[j].position )
                                            .to( { x:x,y:y,z:0}, 1000 )
                                            .easing( TWEEN.Easing.Elastic.InOut );

										//var tweenback=new TWEEN.Tween( objects[j].position )
										//.to( { x:-1600+j*800,y:0,z:0}, 1000 )
										//.easing( TWEEN.Easing.Elastic.InOut );
										var tweenback3;
									(function (b) {
											res=1;
											active[j]=0;
											function backupdate2() {
												domnodes[b].getElementsByTagName('img')[0].style.left=elstyle.left+'px';
												domnodes[b].getElementsByTagName('div')[0].style.display='block';
												domnodes[b].getElementsByTagName('div')[1].style.display='block';

											}
											function backupdate3() {
												// alert(domnodes[a].getElementsByTagName('div')[2].style.display);
												domnodes[b].getElementsByTagName('div')[2].style.display='none';
												domnodes[b].getElementsByTagName('div')[2].style.opacity=elstyle.opacity;
												domnodes[b].getElementsByTagName('div')[3].style.display='none';
												domnodes[b].getElementsByTagName('div')[3].style.opacity=elstyle.opacity;

											}
											function update2() {

											domnodes[b].style.width = elstyle.width + 'px';
											domnodes[b].style.height = elstyle.height + 'px';
											}
											tweenback6=new TWEEN.Tween( elstyle )
											.to( { width:610,height:800}, 1000 )
											.easing( TWEEN.Easing.Elastic.InOut )
											.onUpdate(update2);

										var tweenback4=new TWEEN.Tween( elstyle )
										.to( { left:0}, 300 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate2);


										var tweenback5=new TWEEN.Tween( elstyle )
										.to( { display:'block'}, 500 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate2);


										var tweenback3=new TWEEN.Tween( elstyle )
										.to( { opacity:0}, 500 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate3);
										// tweenback5.chain(tweenback6);
										tweenback4.chain(tweenback5);
										tweenback3.chain(tweenback4);
										tweenback6.chain(tweenback2);
										tweenback3.start();
										tweenback.delay(1500);
										tweenback.start();
										tweenback6.delay(500);
										tweenback6.start();



									})(j)

									}
								}

								var tween1=new TWEEN.Tween( objects[a].position )
								.to( { z: 0},100)
								.easing( TWEEN.Easing.Exponential.InOut )
								;

								var tween2=new TWEEN.Tween(objects[a].rotation )
								.to({x:6.3},2000)
								.easing( TWEEN.Easing.Exponential.InOut );

								tween1.chain(tween2);

								var tween3=new TWEEN.Tween( objects[a].position )
								.to( { x:0,y:0,z:1000}, 1000 )
								.easing( TWEEN.Easing.Exponential.InOut );



								var tween4=new TWEEN.Tween( elstyle )
								.to( { width:1600,height:1000}, 1000 )
								.easing( TWEEN.Easing.Elastic.InOut )
								.onUpdate(update4);

								tween3.chain(tween4);

								var tween5=new TWEEN.Tween( elstyle )
								.to( { left:-500}, 500 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update2);
								tween4.chain(tween5);

								var tween6=new TWEEN.Tween( elstyle )
								.to( { display:'none'}, 10 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update2);
								tween5.chain(tween6);

								var tween7=new TWEEN.Tween( elstyle )
								.to( { opacity:1.0}, 200 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update3);
								tween6.chain(tween7);

								function update4() {

									domnodes[a].style.width = elstyle.width + 'px';
									domnodes[a].style.height = elstyle.height + 'px';


								}
								function update2() {
									domnodes[a].getElementsByTagName('img')[0].style.left=elstyle.left+'px';
									domnodes[a].getElementsByTagName('div')[0].style.display='none';
									domnodes[a].getElementsByTagName('div')[1].style.display='none';

								}
								function update3() {
									// alert(domnodes[a].getElementsByTagName('div')[2].style.display);
									domnodes[a].getElementsByTagName('div')[2].style.display='   block';
									domnodes[a].getElementsByTagName('div')[2].style.opacity=elstyle.opacity;
									domnodes[a].getElementsByTagName('div')[3].style.display='block';
									domnodes[a].getElementsByTagName('div')[3].style.opacity=elstyle.opacity;

								}
								if (res==0) {
									active[a]=1;
									tween1.start();
									tween3.start();

									bin=1;
								}

								setTimeout(function () { up = 0 },2500);


							}



					})(i)
			}


			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {
					// alert(objects[i]);
					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );



			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();
				render();
			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

				camera.lookAt( scene.position );
				renderer.render( scene, camera );
			}

})()
