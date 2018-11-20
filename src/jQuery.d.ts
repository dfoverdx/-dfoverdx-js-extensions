import jQuery from 'jquery';

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    /**
     * If `newNodeName` is specified, changes the element type of every item in the list to `newNodeName`.
     * Otherwise, returns the node name of the first element in the list.
     * 
     * @param newNodeName The new node name to change the elements to.
     */
    nodeName(newNodeName?: string): this;
}