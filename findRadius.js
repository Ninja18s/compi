function radius(plants, spr) {
    let radius = 0;
    for (let i = 0; i < plants.length; i++) {
        for (let j = 0; j < spr.length; j++) {
            if (spr[j + 1] < plants[i]) {
                radius = spr[j] - plants[i]
            }
            // if (spr[j] - plants[i] > radius && spr[j] - plants[i] > 0) {
            //     radius = spr[j] - plants[i]
            // }
        }
    }
    return radius;
}
// const plants = [282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923];
// const sprinklers = [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612];
const plants = [1, 2, 3, 4]
const sprinklers = [2]
const result = radius(plants, sprinklers);
console.log('radius :>> ', result);