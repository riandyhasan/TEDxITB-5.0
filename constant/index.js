export const FONTS = `
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url('/assets/fonts/HKGrotest/OTF/HKGrotesk-ExtraLight.otf') format('otf'), /* IE6-IE8 */
       url('/assets/fonts/HKGrotest/WEB/HKGrotesk-ExtraLight.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/HKGrotest/WEB/HKGrotesk-ExtraLight.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/HKGrotest/TTF/HKGrotesk-ExtraLight.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 400;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-Regular.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Regular.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Regular.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: italic;
  font-weight: 400;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-Italic.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Italic.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Italic.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-Italic.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-SemiBold.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-SemiBold.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-SemiBold.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-SemiBold.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-Bold.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Bold.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Bold.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-Bold.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 700;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-ExtraBold.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-ExtraBold.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-ExtraBold.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-ExtraBold.ttf') format('truetype'), /* Safari, Android, iOS */
}
@font-face {
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 800;
  src: local(''),
  url('/assets/fonts/HKGrotest/OTF/HKGrotesk-Black.otf') format('otf'), /* IE6-IE8 */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Black.woff2') format('woff2'), /* Super Modern Browsers */
  url('/assets/fonts/HKGrotest/WEB/HKGrotesk-Black.woff') format('woff'), /* Modern Browsers */
  url('/assets/fonts/HKGrotest/TTF/HKGrotesk-Black.ttf') format('truetype'), /* Safari, Android, iOS */
}
`;

export const EMAIL_TEMPLATE = (item, price, qty) => {
  let ITEM = [];
  item.map((i, idx) =>
    ITEM.push(`                      
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; vertical-align: top; border: 0;">
    <table class="text_block" style="word-break: break-word; width: 99.9155%;" role="presentation" border="0">
      <tbody>
        <tr>
          <td style="padding: 25px 20px 10px; width: 100%;">
            <div style="font-family: sans-serif;">
              <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #000; line-height: 1.2; font-family: Lato,Tahoma,Verdana,Segoe,sans-serif;">
                <p style="margin: 0; font-size: 14px;">
                  <span style="color: #000000; font-size: 14px;">${qty[idx]} x ${i}</span>
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; vertical-align: top; border: 0;">
    <table class="text_block" style="word-break: break-word; width: 99.407%; height: 52.7917px;" role="presentation" border="0">
      <tbody>
        <tr style="height: 52.7917px;">
          <td style="padding: 25px 20px 10px; width: 100%; height: 52.7917px;">
            <div style="font-family: sans-serif;">
              <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #000; line-height: 1.2; font-family: Lato,Tahoma,Verdana,Segoe,sans-serif;">
                <p style="margin: 0px; font-size: 14px; text-align: right;">IDR ${price[idx]}</p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
`)
  );
  return ITEM;
};
