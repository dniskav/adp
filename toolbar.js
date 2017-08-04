function buildToolbarHtml() {
  return `
    <div class="adp-next">
      <button disabled class="adp-next__fill adp-next__btn">Fill</button>
    </div>
  `;
}

function init() {

  const appContainer = document.querySelector('#appContainer');
  const toolbarHtml = buildToolbarHtml();

  appContainer.insertAdjacentHTML('afterbegin', toolbarHtml);

  const toolbar = appContainer.querySelector('.adp-next');

  whenElementReady('#TcGrid', appContainer, () => {
    const fill = toolbar.querySelector('.adp-next__fill');
    fill.removeAttribute('disabled');
    fill.addEventListener('click', cloneAll);
  });
}

function cloneAll() {
  const rowsLenght = appContainer.querySelectorAll('#TcGrid .dR').length;
  for (let i = 0; i < rowsLenght; i++) {
    cloneLastFilledRow();
  }
}

function cloneLastFilledRow() {

  const rows = appContainer.querySelectorAll('#TcGrid .dR');

  for (let i = rows.length - 1; i >= 0; i--) {
    const row = rows[i];
    const payCodeEle = row.querySelector('[id$=PayCodeID]');
    const payCode = payCodeEle.textContent.trim();
    if (payCode) {
      cloneRow(row);
      break;
    }
  }
}

function cloneRow(row) {

  const menuIcon = row.querySelector('.menuIcon');
  menuIcon.click();

  const menu = obtainMenu(row);

  const copy = menu.querySelectorAll('tr')[2];
  copy.click();
}

function obtainMenu(row) {
  const menus = Array.from(document.querySelectorAll('.dijitPopup'));
  const visible = menus.find(it => it.style.display !== 'none');
  return visible;
}

function whenElementReady(cssSelector, context, callback, timer = 200) {
  setTimeout(() => {

    const el = context.querySelector(cssSelector);

    if (el) {
      callback(el);
      return;
    }

    whenElementReady(cssSelector, context, callback, timer);

  }, timer);
}


init();
