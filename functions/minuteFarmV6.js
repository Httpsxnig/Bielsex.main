const originalFetch = window.fetch;

window.fetch = async function (input, init = {}) {
    let body;
    if (input instanceof Request) body = await input.clone().text();
    else if (init.body) body = init.body;
    if (features.minuteFarmer && body && input.url.includes("mark_conversions")) {
        try {
            if (body.includes("termination_event")) { sendToast("f6ab Limitador de tempo bloqueado.", 1000); return; }
        } catch (e) { debug(`f6a8 Error @ minuteFarm.js\n${e}`); }
    }
    return originalFetch.apply(this, arguments);
}; 