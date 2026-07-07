async function loadIncludes() {
    const includeEls = document.querySelectorAll('[data-include]');
    await Promise.all(
        Array.from(includeEls).map(async (el) => {
            const path = el.getAttribute('data-include');
            try {
                const res = await fetch(path);
                if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
                el.innerHTML = await res.text();
            } catch (err) {
                console.error(err);
                el.innerHTML = `<p class="text-sm text-red-500">Failed to load section.</p>`;
            }
        })
    );
}
document.addEventListener('DOMContentLoaded', loadIncludes);
