import { addClass, ael, rmClass, _ } from "./broToolBox.js";
import { broPost, shower } from "./fetching.js";

const configForm: HTMLFormElement = _('#config'),
    getUrl = () => _('#url').value,
    submitBtn: HTMLButtonElement = _('.brosubmit'),
    showingPlace: HTMLElement = _('.showingPlace'),
    reqBody: HTMLElement = _('.reqBody'),
    fetchConfig: RequestInit = {},
    loading: HTMLParagraphElement = _('.loading'),

    isActivInsert = () => fetchConfig.method === "POST" || fetchConfig.method === "PUT",
    buildConfig = () => {
        let form: HTMLFormElement = this
        _('select[name]', form).forEach((select: HTMLSelectElement) => {
            select.name === "headers"
                ? fetchConfig.headers = { 'content-Type': select.value }
                : fetchConfig[select.name] = select.value
        })
        if (isActivInsert()) {
            addClass('appear', reqBody)
            addClass('giveSpace', showingPlace)
        } else {
            rmClass('appear', reqBody)
            rmClass('giveSpace', showingPlace)
        }
    },
    fetching = () => {
        rmClass('d-none', loading)
        fetchConfig.body = isActivInsert()
            ? _('.reqBodyJson').innerText.trim()
            : null
        broPost(getUrl(), fetchConfig)
            .then(resp => {
                addClass('d-none', loading)
                shower(resp)
            })
            .catch(err => {
                addClass('d-none', loading)
                shower(err)
            })
    }

// init
buildConfig()

ael('change', configForm, buildConfig.bind(configForm))

ael('click', submitBtn, fetching)

ael('keydown', document.documentElement, (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !document.activeElement.classList.contains("reqBodyJson")) {
        fetching()
    }
})

