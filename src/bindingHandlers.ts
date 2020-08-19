import * as ko from "knockout";
import 'chosen-js';
import 'chosen-js/chosen.css';

export function bindingHandlers() {
    ko.bindingHandlers.tags = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            let bindings = ko.utils.unwrapObservable(allBindings());
  
            $(element).chosen({
                no_results_text: "No se encontraron elementos"
            });
            
            $(element).on('change', (evt: any, params: any) => {
                if (typeof params.selected !== "undefined") {
                    console.log("selected", params)
                }
                if (typeof params.deselected !== "undefined") {
                    console.log("deselected", params)
                }               
            });

        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.
            let bindings = ko.utils.unwrapObservable(allBindings());
            let value = bindings.tagValue;
            let text = bindings.tagText;
            let tags_selected = bindings.tagsSelected().map((x: any) => x[value]);

            bindings.tags().forEach((item:any) => {
                let selected: boolean = tags_selected.includes(item[value]);

                $(element).append(new Option(item[text], item[value], undefined, selected));
            });

            $(element).trigger("chosen:updated");
        }
    };
}

bindingHandlers();