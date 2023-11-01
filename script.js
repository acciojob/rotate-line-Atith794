//your JS code here. If required.

	let lin = document.getElementById("line");
	let angle=0;
	function rotateLin(){
		angle += 2;
		lin.style.transform = `translateX(50%) translateY(50%) rotate(${angle}deg)`;
	}

	setInterval(rotateLin,20);


// it('rotates the line every 2 milliseconds', () => {
//   cy.visit('your_page_url_here');

//   // Wait for the #line element to be available in the DOM
//   cy.get('#line').should('exist');

//   cy.get('#line').then(($element) => {
//     const initialTransform = $element.css('transform');
//     cy.wait(2000).then(() => { // Wait for 2000ms (2 seconds) to match your requirement
//       const updatedTransform = $element.css('transform');
//       expect(updatedTransform).not.to.equal(initialTransform);
//     });
//   });
// });
// requestAnimationFrame(rotateLin);
// rotateLin();