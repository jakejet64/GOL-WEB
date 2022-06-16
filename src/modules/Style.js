export default class Style {
    constructor(primary, secondary, background, radius){
        this.primary = primary;
        this.secondary = secondary;
        this.background = background;
        this.radius = radius;
    }

    getPrimary() {
        return this.primary;
    }

    getSecondary() {
        return this.secondary;
    }

    getBackground() {
        return this.background;
    }

    getRadius() {
        return this.radius;
    }
}