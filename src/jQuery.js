let jq;

if (typeof window !== 'undefined') {
    if (window.jQuery) {
        jq = jQuery;
    }
}

if (!jq) {
    try {
        jq = require('jquery');
    } catch {}
}

($ => {
    if (!$) {
        return;
    }

    $.fn.nodeName = function (newNodeName) {
        if (!this.length) {
            if (newNodeName !== undefined) {
                return this;
            }

            return undefined;
        }

        if (newNodeName === undefined) {
            return this[0].nodeName;
        }

        if (newNodeName instanceof Function) {
            return this.map(function (index) {
                return this.nodeName(newNodeName(index, this))[0];
            });
        }

        return this.map(function () {
            let $this = $(this),
                $el = $(`<${newNodeName}>`).data($this.data());

            $.fn.click

            Array.from(this.attributes).forEach(a => {
                if (!a.name.startsWith('data-')) {
                    $el.attr(a.name, a.value);
                }
            });

            for (let events of Object.values($._data($this[0], 'events') || {})) {
                for (let event of events) {
                    let name = event.namespace ? (`${event.type}.${event.namespace}`) : event.type;
                    $el.bind(name, event.data, event.handler);
                }
            }

            $this.wrapInner($el);
            $this.contents().unwrap();
            return $el[0];
        });
    };
})(jq);