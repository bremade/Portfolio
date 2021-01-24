function checkMobile() {
	return window.innerWidth <= 1280;
}

function checkCentering() {
	if (checkMobile()) {
		return "center";
	} else {
		return "flex-start";
	}
}

function checkPictureDimension() {
	if (checkMobile()) {
		return "70";
	} else {
		return "120";
	}
}

const scrollWithOffset = (el, offset) => {
	const elementPosition = el.offsetTop - offset;
	window.scroll({
	  top: elementPosition,
	  left: 0,
	  behavior: "smooth"
	})
}  