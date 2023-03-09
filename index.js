function newImage(url){
    let object = document.createElement('img')
    object.src = url
    document.body.append(object)
    return object
}

function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
    return item
}

function move(element){
    element.style.position = 'fixed'

    function moveToCoordinates(left,bottom){
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    let result= {
        to: moveToCoordinates
    }
    return result
   
}

/*let greenCharacter = newImage('assets/green-character.gif')
let moveobject= move(greenCharacter)
moveobject.to(100, 250)*/

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()

move(inventory).to(0,0)
move(newImage('assets/green-character.gif')).to(300,300)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)