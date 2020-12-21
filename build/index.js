import { ael, _ } from "./app/broToolBox.js";
import { broPost, shower } from "./app/fetching.js";
const urlInput = _('input#url');
const url = (urlEnding) => _('input#url').value + urlEnding;
_('a.brolink').forEach((link) => {
    ael('click', link, (e) => {
        e.preventDefault();
        fetch(url(link.getAttribute('href')))
            .then(resp => resp.json())
            .then(shower)
            .catch(shower);
    });
});
_('form').forEach((form) => {
    // console.log(url(form.getAttribute('action')))
    if (form.method === "get") {
        ael('submit', form, function (e) {
            e.preventDefault();
            fetch(url(this.getAttribute('action')), { method: this.method });
        });
        return;
    }
    ael('submit', form, function (e) {
        e.preventDefault();
        const data = new FormData(this);
        broPost(url(this.getAttribute('action')), data, this.method).then(console.log)
            .catch(shower);
    });
});
// gerer modifier
ael("click", _('.btn-light'), e => {
});
// URL auto binding j'affiche dans les modals l'adress d'entête
const urlSpans = _('[data-binding="input#url"]');
ael('keyup', urlInput, function (e) {
    urlSpans.forEach((span) => {
        span.innerHTML = this.value;
    });
});
// urlEnd pour chaque btn d'action
const urlEndSpan = _('span[name=urlend]');
console.log(_('form[name=findbyid] [name=_id]').form);
