// code your solution here
function saturdayFun( activity= 'roller-skate' ){
    return `This Saturday, I want to ${activity}!`

}
saturdayFun()
function saturdayFun( activity= 'roller-skate' ){
    return `This Saturday, I want to ${activity}!`

}
saturdayFun("bathe my dog")

function mondayWork(activity = 'go to the office' ){
    return `This Monday, I will ${activity}`

}
mondayWork()

function mondayWork(activity = 'go to the office' ){
    return `This Monday, I will ${activity}.`

}
mondayWork("work from home")


function wrapAdjective (activity = '*'){
    return function(name='special'){
    return `You are ${activity}${name}${activity}!`
    }
}
wrapAdjective("%")("a dedicated programmer")

