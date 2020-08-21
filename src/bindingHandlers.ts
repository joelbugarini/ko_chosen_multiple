import * as ko from "knockout";
import 'chosen-js';
import 'chosen-js/chosen.css';

export function bindingHandlers() {
    ko.bindingHandlers.tags = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            let bindings = ko.utils.unwrapObservable(allBindings());
  
            $(element).chosen({
                no_results_text: "No se encontraron elementos"
            });
            
            $(element).on('change', (evt: any, params: any) => {
                if (typeof params.selected !== "undefined") {
                    let selected = bindings.selected.bind(evt, params);
                    selected();
                }
                if (typeof params.deselected !== "undefined") {
                    let deselect =bindings.deselected.bind(evt, params);
                    deselect();
                }               
            });

        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
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