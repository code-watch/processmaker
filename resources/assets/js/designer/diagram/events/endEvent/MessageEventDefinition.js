import {JointElements} from "../../jointElements/index"
import {Shape} from "../../Shape"
/**
 * MessageEventDefinition class
 */
export default class extends Shape {
    constructor(root, options) {
        super(root)
        this.options = options
    }

    /**
     * Render the EndEmailEvent Based in options config
     */
    render() {
        this.shape = new JointElements.EndEventMessageDefinition({id: this.options.bpmnElement.id})
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.attr({
            label: {
                text: this.options.bpmnElement.name
            }
        })
        this.shape.addTo(this.root.graph)
    }
}
