var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.addEventListener('mousemove', mouseLocation);

var blocks = [
	[1, 0, 0, 0, 0, 0, 0, 2],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 0, 0, 0, 0, 0, 1]
];
var width = myCanvas.width;
var blockSize = width / blocks.length;

function drawYellowBlock(x, y) {
	ctx.beginPath();
	ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
	ctx.fillStyle = "yellow";
	ctx.fill(); 
	ctx.stroke();
	ctx.closePath();
}

function drawRedBlock(x, y) {
	ctx.beginPath();
	ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
	ctx.fillStyle = "red";
	ctx.fill(); 
	ctx.stroke();
	ctx.closePath();
}

function drawWhiteBlock(x, y) {
	ctx.beginPath();
	ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
	ctx.fillStyle = "white";
	ctx.fill(); 
	ctx.stroke();
	ctx.closePath();
}

for(var y = 0; y < blocks.length; y++) {
	for(var x = 0; x < blocks[0].length; x++) {
		if(blocks[y][x] == 0) {
			drawWhiteBlock(x,y);
		} else if(blocks[y][x] == 1) {
			drawYellowBlock(x,y);
		} else if(blocks[y][x] == 2) {
			drawRedBlock(x,y);
		}
	}
}

function mousePointer(x, y) {
	this.x = x;
	this.y = y;

	this.setLocation = function(x, y) {
		this.x = x;
		this.y = y;
	}
}

var mouse = new mousePointer(0, 0);

var blockX;
var blockY;
function mouseLocation(event) {
	mouse.setLocation(event.clientX, event.clientY);

	if (event.clientX < c.width / 8) {
		if (event.clientY < c.height / 8) {
			blockX = 0;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 0;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 0;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 0;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 0;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 0;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 0;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 0;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 2) {
		if (event.clientY < c.height / 8) {
			blockX = 1;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 1;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 1;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 1;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 1;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 1;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 1;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 1;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 3) {
		if (event.clientY < c.height / 8) {
			blockX = 2;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 2;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 2;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 2;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 2;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 2;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 2;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 2;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 4) {
		if (event.clientY < c.height / 8) {
			blockX = 3;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 3;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 3;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 3;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 3;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 3;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 3;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 3;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 5) {
		if (event.clientY < c.height / 8) {
			blockX = 4;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 4;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 4;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 4;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 4;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 4;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 4;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 4;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 6) {
		if (event.clientY < c.height / 8) {
			blockX = 5;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 5;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 5;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 5;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 5;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 5;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 5;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 5;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width / 8 * 7) {
		if (event.clientY < c.height / 8) {
			blockX = 6;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 6;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 6;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 6;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 6;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 6;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 6;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 6;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	} else if (event.clientX < c.width) {
		if (event.clientY < c.height / 8) {
			blockX = 7;
			blockY = 0;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 2) {
			blockX = 7;
			blockY = 1;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 3) {
			blockX = 7;
			blockY = 2;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 4) {
			blockX = 7;
			blockY = 3;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 5) {
			blockX = 7;
			blockY = 4;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 6) {
			blockX = 7;
			blockY = 5;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height / 8 * 7) {
			blockX = 7;
			blockY = 6;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		} else if (event.clientY < c.height) {
			blockX = 7;
			blockY = 7;
			console.log("Block position: " + blockX + " , " + blockY);
			console.log("Mouse position: " + event.clientX + " , " + event.clientY);
		}
	}
}
