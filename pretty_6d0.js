(window.webpackJsonp = window.webpackJsonp || [
]).push([[34,
14],
{
  1000: function (e, t, r) {
    var o = r(107),
    n = r(200),
    l = r(1001),
    c = r(1002),
    d = o(!1),
    m = n(l),
    f = n(c);
    d.push([e.i,
    '@font-face{font-family:Wingdings;src:url(' + m + ')}@font-face{font-family:"Comic Sans";src:url(' + f + ')}.wrapper[data-v-56b284df]{font-size:16px;padding:15px;font-family:Arial,Helvetica,sans-serif;background-attachment:fixed}.password-box[data-v-56b284df]{width:100%;margin-left:auto;margin-right:auto}.password-box-inner.complete[data-v-56b284df],.password-final[data-v-56b284df]{background:#fff;opacity:.8}.password-final[data-v-56b284df]{border-radius:10px!important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-bottom:40px}.title[data-v-56b284df]{position:absolute;top:80px;left:50%;transform:translateX(-50%);z-index:10;height:22px;display:block}.site-title[data-v-56b284df]{max-width:125px;position:absolute;top:15px;left:15px}.password-bg[data-v-56b284df]{position:absolute;top:0;left:0;height:100%;width:100%;padding:15px;font-size:28px;border-radius:10px;font-family:monospace;background:#fff;color:transparent;border:1px solid transparent;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;word-break:break-all;white-space:break-spaces;word-wrap:break-word;font-variant-ligatures:none;font-feature-settings:"liga" 0,none}.password-bg-loading[data-v-56b284df]{border-color:#000}.password-box-inner[data-v-56b284df]{position:relative;min-height:64px}.password-length[data-v-56b284df]{position:absolute;top:50%;right:-15px;font-size:18px;transform:translate(100%,-50%);opacity:0;transition:opacity .5s ease-in-out}.show-password-length[data-v-56b284df]{opacity:1}.password-wrapper[data-v-56b284df]{max-width:485px;margin:167px auto 60px}.password-label[data-v-56b284df]{text-align:left;margin-bottom:8px;font-size:16px}.toolbar[data-v-56b284df]{background:#fff;border:1px solid #000;border-top:none;padding:10px;border-radius:10px;border-top-left-radius:0;border-top-right-radius:0;display:flex;flex-wrap:wrap;grid-gap:8px;transform:scaleY(0);transform-origin:center top;animation:showToolbar-56b284df .4s ease-in-out forwards}.death-screen[data-v-56b284df]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.8);-webkit-backdrop-filter:saturate(0);backdrop-filter:saturate(0);z-index:100;animation:fadeInDeath-56b284df .5s ease-in-out forwards;opacity:0;text-align:center}@keyframes fadeInDeath-56b284df{to{opacity:1}}.death-screen-strip[data-v-56b284df]{position:absolute;top:50%;transform:translateY(-50%);left:0;width:100%;height:100px;background:rgba(0,0,0,.95);color:red;display:flex;justify-content:center;align-items:center;font-size:48px;font-family:"Georgia",Times,serif;text-transform:uppercase;box-shadow:0 0 80px 50px rgba(0,0,0,.7)}@keyframes showToolbar-56b284df{to{transform:none}}.error-match[data-v-56b284df]{margin:15px 0;background-color:#ffecec;border:1px solid red;box-shadow:2px 2px 5px 2px rgba(255,0,0,.12);padding:15px;width:100%;border-radius:10px}.end-screen[data-v-56b284df],.error-match[data-v-56b284df]{text-align:center;color:#000;line-height:1.5em}.end-screen[data-v-56b284df]{margin-top:15px;font-size:18px;background-color:#daffda;border:1px solid #267b30;box-shadow:3px 3px 5px 2px rgba(60,155,71,.2);padding:14px 20px;border-radius:10px;animation:endPopup-56b284df .4s ease-in-out forwards}@keyframes endPopup-56b284df{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}.toolbar button[data-v-56b284df]{background:#fff;font-size:16px;padding:5px 11px;border-radius:5px;cursor:pointer;border:1px solid #b3b3b3;box-shadow:2px 2px 2px 0 rgba(0,0,0,.05);transition:background .15s linear;color:#000;opacity:0;animation:showButton-56b284df .4s ease-in-out forwards;touch-action:manipulation}@keyframes showButton-56b284df{to{opacity:1}}.toolbar button.is-active[data-v-56b284df]{background:#000;border-color:#000;color:#fff;box-shadow:none}.toolbar select[data-v-56b284df]{color:#000;background:#fff;font-size:16px;padding:5px 35px 5px 12px;border-radius:5px;cursor:pointer;border:1px solid #b3b3b3;box-shadow:2px 2px 2px 0 rgba(0,0,0,.05);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(/password-game/chevron.svg);background-size:12px 12px;background-repeat:no-repeat;background-position:calc(100% - 10px) 9px}.bomb[data-v-56b284df]{margin-bottom:50px;position:relative}.bomb-img[data-v-56b284df]{width:100px}.bomb-fuse[data-v-56b284df]{width:100%;height:2px;background:#ff712f;border-radius:3px;animation:bombFuse-56b284df 90s linear forwards;transform-origin:center left;position:absolute;top:calc(100% - 6px);left:0}.bomb-fuse-pause[data-v-56b284df]{animation-play-state:paused}.bomb-fuse[data-v-56b284df]:after{content:"";width:50px;height:50px;background-image:url(/password-game/sparkle.gif);background-size:contain;background-position:50%;position:absolute;right:-25px;top:-24px;z-index:10}.bomb-fuse-pause.bomb-fuse[data-v-56b284df]:after{display:none}@keyframes bombFuse-56b284df{to{width:100px}}.list-item[data-v-56b284df]{display:inline-block}.banner[data-v-56b284df]{background:#ff2b2b;color:#fff;position:absolute;top:0;right:0;padding:10px;font-size:14px;border-bottom-left-radius:5px}@media screen and (max-width:600px){.wrapper[data-v-56b284df]{padding:20px}.password-length[data-v-56b284df]{right:5px;top:-25px;font-size:16px;transform:none}.password-wrapper[data-v-56b284df]{margin-top:120px}.site-title[data-v-56b284df]{max-width:95px;opacity:.75}.death-screen-strip[data-v-56b284df]{font-size:36px}.title[data-v-56b284df]{top:102px;height:20px}.password-label[data-v-56b284df]{margin-bottom:6px}.password-wrapper[data-v-56b284df]{margin-top:160px}}',
    '']),
    e.exports = d
  },
  1001: function (e, t, r) {
    e.exports = r.p + 'fonts/Wingdings.2c01544.woff2'
  },
  1002: function (e, t, r) {
    e.exports = r.p + 'fonts/Comic-Sans.633e967.woff2'
  },
  1145: function (e, t, r) {
    'use strict';
    r.r(t);
    var o = r(286),
    n = r(10),
    l = (r(60), r(15), r(112), r(32), r(514), r(63), r(66), r(110), r(48), r(30), r(209), r(33), r(146), r(62), r(83), r(342), r(451), r(40), r(452), r(453), r(454), r(455), r(456), r(457), r(458), r(459), r(460), r(461), r(462), r(463), r(464), r(465), r(466), r(467), r(41), r(47), r(370), r(208), r(45), r(211), r(69), [
      {
        num: '1',
        symbol: 'H'
      },
      {
        num: '2',
        symbol: 'He'
      },
      {
        num: '3',
        symbol: 'Li'
      },
      {
        num: '4',
        symbol: 'Be'
      },
      {
        num: '5',
        symbol: 'B'
      },
      {
        num: '6',
        symbol: 'C'
      },
      {
        num: '7',
        symbol: 'N'
      },
      {
        num: '8',
        symbol: 'O'
      },
      {
        num: '9',
        symbol: 'F'
      },
      {
        num: '10',
        symbol: 'Ne'
      },
      {
        num: '11',
        symbol: 'Na'
      },
      {
        num: '12',
        symbol: 'Mg'
      },
      {
        num: '13',
        symbol: 'Al'
      },
      {
        num: '14',
        symbol: 'Si'
      },
      {
        num: '15',
        symbol: 'P'
      },
      {
        num: '16',
        symbol: 'S'
      },
      {
        num: '17',
        symbol: 'Cl'
      },
      {
        num: '18',
        symbol: 'Ar'
      },
      {
        num: '19',
        symbol: 'K'
      },
      {
        num: '20',
        symbol: 'Ca'
      },
      {
        num: '21',
        symbol: 'Sc'
      },
      {
        num: '22',
        symbol: 'Ti'
      },
      {
        num: '23',
        symbol: 'V'
      },
      {
        num: '24',
        symbol: 'Cr'
      },
      {
        num: '25',
        symbol: 'Mn'
      },
      {
        num: '26',
        symbol: 'Fe'
      },
      {
        num: '27',
        symbol: 'Co'
      },
      {
        num: '28',
        symbol: 'Ni'
      },
      {
        num: '29',
        symbol: 'Cu'
      },
      {
        num: '30',
        symbol: 'Zn'
      },
      {
        num: '31',
        symbol: 'Ga'
      },
      {
        num: '32',
        symbol: 'Ge'
      },
      {
        num: '33',
        symbol: 'As'
      },
      {
        num: '34',
        symbol: 'Se'
      },
      {
        num: '35',
        symbol: 'Br'
      },
      {
        num: '36',
        symbol: 'Kr'
      },
      {
        num: '37',
        symbol: 'Rb'
      },
      {
        num: '38',
        symbol: 'Sr'
      },
      {
        num: '39',
        symbol: 'Y'
      },
      {
        num: '40',
        symbol: 'Zr'
      },
      {
        num: '41',
        symbol: 'Nb'
      },
      {
        num: '42',
        symbol: 'Mo'
      },
      {
        num: '43',
        symbol: 'Tc'
      },
      {
        num: '44',
        symbol: 'Ru'
      },
      {
        num: '45',
        symbol: 'Rh'
      },
      {
        num: '46',
        symbol: 'Pd'
      },
      {
        num: '47',
        symbol: 'Ag'
      },
      {
        num: '48',
        symbol: 'Cd'
      },
      {
        num: '49',
        symbol: 'In'
      },
      {
        num: '50',
        symbol: 'Sn'
      },
      {
        num: '51',
        symbol: 'Sb'
      },
      {
        num: '52',
        symbol: 'Te'
      },
      {
        num: '53',
        symbol: 'I'
      },
      {
        num: '54',
        symbol: 'Xe'
      },
      {
        num: '55',
        symbol: 'Cs'
      },
      {
        num: '56',
        symbol: 'Ba'
      },
      {
        num: '57',
        symbol: 'La'
      },
      {
        num: '58',
        symbol: 'Ce'
      },
      {
        num: '59',
        symbol: 'Pr'
      },
      {
        num: '60',
        symbol: 'Nd'
      },
      {
        num: '61',
        symbol: 'Pm'
      },
      {
        num: '62',
        symbol: 'Sm'
      },
      {
        num: '63',
        symbol: 'Eu'
      },
      {
        num: '64',
        symbol: 'Gd'
      },
      {
        num: '65',
        symbol: 'Tb'
      },
      {
        num: '66',
        symbol: 'Dy'
      },
      {
        num: '67',
        symbol: 'Ho'
      },
      {
        num: '68',
        symbol: 'Er'
      },
      {
        num: '69',
        symbol: 'Tm'
      },
      {
        num: '70',
        symbol: 'Yb'
      },
      {
        num: '71',
        symbol: 'Lu'
      },
      {
        num: '72',
        symbol: 'Hf'
      },
      {
        num: '73',
        symbol: 'Ta'
      },
      {
        num: '74',
        symbol: 'W'
      },
      {
        num: '75',
        symbol: 'Re'
      },
      {
        num: '76',
        symbol: 'Os'
      },
      {
        num: '77',
        symbol: 'Ir'
      },
      {
        num: '78',
        symbol: 'Pt'
      },
      {
        num: '79',
        symbol: 'Au'
      },
      {
        num: '80',
        symbol: 'Hg'
      },
      {
        num: '81',
        symbol: 'Tl'
      },
      {
        num: '82',
        symbol: 'Pb'
      },
      {
        num: '83',
        symbol: 'Bi'
      },
      {
        num: '84',
        symbol: 'Po'
      },
      {
        num: '85',
        symbol: 'At'
      },
      {
        num: '86',
        symbol: 'Rn'
      },
      {
        num: '87',
        symbol: 'Fr'
      },
      {
        num: '88',
        symbol: 'Ra'
      },
      {
        num: '89',
        symbol: 'Ac'
      },
      {
        num: '90',
        symbol: 'Th'
      },
      {
        num: '91',
        symbol: 'Pa'
      },
      {
        num: '92',
        symbol: 'U'
      },
      {
        num: '93',
        symbol: 'Np'
      },
      {
        num: '94',
        symbol: 'Pu'
      },
      {
        num: '95',
        symbol: 'Am'
      },
      {
        num: '96',
        symbol: 'Cm'
      },
      {
        num: '97',
        symbol: 'Bk'
      },
      {
        num: '98',
        symbol: 'Cf'
      },
      {
        num: '99',
        symbol: 'Es'
      },
      {
        num: '100',
        symbol: 'Fm'
      },
      {
        num: '101',
        symbol: 'Md'
      },
      {
        num: '102',
        symbol: 'No'
      },
      {
        num: '103',
        symbol: 'Lr'
      },
      {
        num: '104',
        symbol: 'Rf'
      },
      {
        num: '105',
        symbol: 'Db'
      },
      {
        num: '106',
        symbol: 'Sg'
      },
      {
        num: '107',
        symbol: 'Bh'
      },
      {
        num: '108',
        symbol: 'Hs'
      },
      {
        num: '109',
        symbol: 'Mt'
      },
      {
        num: '110',
        symbol: 'Ds'
      },
      {
        num: '111',
        symbol: 'Rg'
      },
      {
        num: '112',
        symbol: 'Cn'
      },
      {
        num: '113',
        symbol: 'Nh'
      },
      {
        num: '114',
        symbol: 'Fl'
      },
      {
        num: '115',
        symbol: 'Mc'
      },
      {
        num: '116',
        symbol: 'Lv'
      },
      {
        num: '117',
        symbol: 'Ts'
      },
      {
        num: '118',
        symbol: 'Og'
      }
    ]),
    c = r(963),
    d = r.n(c),
    m = r(964),
    f = m.DateTime.now().setZone('America/New_York').startOf('day').toJSDate(),
    h = m.DateTime.now().setZone('America/New_York').startOf('day').plus({
      days: 1
    }).toJSDate(),
    w = /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/g,
    P = l.filter((function (e) {
      return 1 === e.symbol.length
    })),
    v = l.filter((function (e) {
      return 2 === e.symbol.length
    }));
    function y(e) {
      if (!e.includes) return 1;
      var t = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      },
      r = 0;
      e.includes('CM') && (r -= 200),
      e.includes('CD') && (r -= 200),
      e.includes('XC') && (r -= 20),
      e.includes('XL') && (r -= 20),
      e.includes('IX') && (r -= 2),
      e.includes('IV') && (r -= 2);
      for (var i = 0; i < e.length; i++) r += t[e[i]];
      return r
    }
    function k(e) {
      var t = R(e),
      r = [
      ];
      return t.forEach((function (t) {
        var n = e.indexOf(t),
        l = t.length;
        r.push.apply(r, Object(o.a) (Array.from(Array(l), (function (e, t) {
          return n + t
        })))),
        e = e.replace(t, ' '.repeat(l))
      })),
      r
    }
    function x(e) {
      var t = e.matchAll(/[0-9]/g),
      r = Object(o.a) (t),
      n = [
      ];
      return r.forEach((function (e) {
        n.push(e.index)
      })),
      n
    }
    function R(e) {
      var t = e.match(w);
      return (t = t.filter((function (e) {
        return e.length > 0
      }))) || [
      ]
    }
    var F = [
      {
        desc: 'Your password must be at least 5 characters.',
        test: function (e, t) {
          return {
            isValid: t.passwordLength >= 5
          }
        },
        id: 'min-length'
      },
      {
        desc: 'Your password must include a number.',
        test: function (e) {
          return {
            isValid: /\d/.test(e)
          }
        },
        id: 'number'
      },
      {
        desc: 'Your password must include an uppercase letter.',
        test: function (e) {
          return {
            isValid: /[A-Z]/.test(e)
          }
        },
        id: 'uppercase'
      },
      {
        desc: 'Your password must include a special character.',
        test: function (e) {
          return {
            isValid: /[^a-zA-Z0-9]/.test(e)
          }
        },
        id: 'special'
      },
      {
        desc: 'The digits in your password must add up to 25.',
        test: function (e) {
          var t = function (e) {
            var t = e.match(/\d/g) || [
            ],
            r = t.map((function (e) {
              return parseInt(e)
            }));
            return {
              strArr: t,
              numArr: r
            }
          }(e),
          r = (t.strArr, t.numArr);
          return 0 !== r.length && {
            isValid: 25 === r.reduce((function (a, b) {
              return a + b
            }))
          }
        },
        highlight: x,
        id: 'digits'
      },
      {
        desc: 'Your password must include a month of the year.',
        test: function (e) {
          var t = e.toLowerCase();
          return {
            isValid: [
              'january',
              'february',
              'march',
              'april',
              'may',
              'june',
              'july',
              'august',
              'september',
              'october',
              'november',
              'december'
            ].some((function (e) {
              return t.includes(e)
            })),
            explain: ''
          }
        },
        id: 'month'
      },
      {
        desc: 'Your password must include a roman numeral.',
        test: function (e) {
          return {
            isValid: R(e).length > 0
          }
        },
        id: 'roman'
      },
      {
        desc: 'Your password must include one of our sponsors:',
        test: function (e) {
          var t = e.toLowerCase();
          return {
            isValid: [
              'pepsi',
              'starbucks',
              'shell'
            ].some((function (e) {
              return t.includes(e)
            }))
          }
        },
        id: 'sponsors'
      },
      {
        desc: 'The roman numerals in your password should multiply to 35.',
        test: function (e) {
          var t = R(e);
          if (0 === t.length) return !1;
          for (var r = y(t[0]) || 0, i = 1; i < t.length; i++) r *= y(t[i]);
          return {
            isValid: 35 === r
          }
        },
        id: 'roman-multiply',
        highlight: k
      },
      {
        desc: 'Your password must include this CAPTCHA:',
        test: function (e, t) {
          var r = t.currCaptcha;
          return {
            isValid: e.includes(r)
          }
        },
        id: 'captcha'
      },
      {
        desc: 'Your password must include today\'s Wordle answer.',
        test: function (e, t) {
          var r = t.wordleAnswer,
          o = t.tomorrowWordleAnswer,
          n = e.toLowerCase();
          return {
            isValid: n.includes(r) || n.includes(o)
          }
        },
        id: 'wordle'
      },
      {
        desc: 'Your password must include a two letter symbol from the periodic table.',
        test: function (e) {
          return {
            isValid: l.some((function (t) {
              return 2 === t.symbol.length && e.includes(t.symbol)
            })),
            explain: ''
          }
        },
        id: 'periodic-table'
      },
      {
        desc: 'Your password must include the current phase of the moon as an emoji.',
        test: function (e) {
          var t = d.a.getMoonIllumination(f).,
          phase = d.a.getMoonIllumination(h).phase;
          return {
            isValid: (t <= 0.25 && phase >= 0.25 ? [
              '🌓',
              '🌗',
              '🌛',
              '🌜'
            ] : t <= 0.5 && phase >= 0.5 ? [
              '🌕',
              '🌝'
            ] : t <= 0.75 && phase >= 0.75 ? [
              '🌓',
              '🌗',
              '🌛',
              '🌜'
            ] : t >= r ? [
              '🌑',
              '🌚'
            ] : t <= 0.25 ? [
              '🌒',
              '🌘'
            ] : t <= 0.5 || t <= 0.75 ? [
              '🌔',
              '🌖'
            ] : [
              '🌒',
              '🌘'
            ]).some((function (t) {
              return e.includes(t)
            }))
          }
        },
        id: 'moon-phase'
      },
      {
        desc: 'Your password must include the name of this country.',
        test: function (e, t) {
          var r = t.currPlace,
          o = e.toLowerCase().replaceAll(' ', ''),
          n = r.title.toLowerCase().replaceAll(' ', '');
          return {
            isValid: o.includes(n)
          }
        },
        id: 'geo'
      },
      {
        desc: 'Your password must include a leap year.',
        test: function (e) {
          var t = function (e) {
            var t = [
            ],
            r = [
            ],
            n = e.match(/(\d+)/g) || [
            ];
            t.push.apply(t, Object(o.a) (n)),
            r.push.apply(r, Object(o.a) (n.map((function (e) {
              return parseInt(e)
            }))));
            var l = R(e);
            return t.push.apply(t, Object(o.a) (l)),
            r.push.apply(r, Object(o.a) (l.map((function (e) {
              return y(e)
            })))),
            {
              strArr: t,
              numArr: r
            }
          }(e).numArr;
          return {
            isValid: t.some((function (e) {
              return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }))
          }
        },
        id: 'leap-year'
      },
      {
        desc: 'Your password must include the best move in <a style=\'color: #ff0000\' target=\'_blank\' href=\'https://en.wikipedia.org/wiki/Algebraic_notation_(chess)\'>algebraic chess notation.</a>',
        test: function (e, t) {
          var r = t.currChessPuzzle;
          return {
            isValid: e.includes(r.sol)
          }
        },
        id: 'chess'
      },
      {
        desc: '🥚 ← This is my chicken Paul. He hasn\'t hatched yet, please put him in your password and keep him safe.',
        test: function (e, t) {
          var r = t.eggPlaced,
          o = t.triggerDeathAnimation,
          n = t.paulHatched,
          l = e.includes('🥚') || n && e.includes('🐔');
          return r && !l && o('Paul has been slain'),
          {
            isValid: l
          }
        },
        id: 'egg'
      },
      {
        desc: 'The elements in your password must have atomic numbers that add up to 200.',
        test: function (e) {
          var t = 0;
          return [v,
          P].forEach((function (r) {
            r.forEach((function (r) {
              e = e.replaceAll(r.symbol, (function (e) {
                return t += parseInt(r.num),
                ''
              }))
            }))
          })),
          {
            isValid: 200 === t,
            explain: ''
          }
        },
        id: 'atomic-number',
        highlight: function (e) {
          for (var t = [
          ], r = 0; r < v.length; r++) for (var o = v[r], n = e.indexOf(o.symbol); n > - 1; ) t.push(n),
          t.push(n + 1),
          n = (e = e.replace(o.symbol, ' '.repeat(2))).indexOf(o.symbol);
          for (var l = 0; l < P.length; l++) for (var c = P[l], d = e.indexOf(c.symbol); d > - 1; ) t.push(d),
          d = (e = e.replace(c.symbol, ' ')).indexOf(c.symbol);
          return t
        }
      },
      {
        desc: 'All the vowels in your password must be bolded.',
        test: function (e, t) {
          var r = t.doc,
          n = !0,
          l = [
          ];
          return r.descendants((function (e, t) {
            e.text && e.text.match(/[aeiouy]/gi) && (e.marks.some((function (mark) {
              return 'bold' === mark.type.name
            })) || (n = !1, Object(o.a) (e.text.matchAll(/[aeiouy]/gi)).forEach((function (e) {
              l.push(t + e.index - 1)
            }))))
          })),
          {
            isValid: n,
            highlights: l
          }
        },
        id: 'bold-vowels'
      },
      {
        desc: 'Oh no! Your password is on fire. Quick, put it out!',
        test: function (e, t) {
          var r = t.fireStarted;
          return {
            isValid: !e.includes('🔥') && r
          }
        },
        id: 'fire'
      },
      {
        desc: 'Your password is not strong enough 🏋️‍♂️',
        test: function (e) {
          return Object(o.a) (e.matchAll('🏋️‍♂️')).length >= 3 ? {
            isValid: !0
          }
           : {
            isValid: !1
          }
        },
        id: 'strength',
        hasDelay: !0
      },
      {
        desc: 'Your password must contain one of the following affirmations:',
        test: function (e) {
          var t = [
            'i am loved',
            'i am worthy',
            'i am enough'
          ],
          r = e.toLowerCase();
          return {
            isValid: t.some((function (e) {
              return r.includes(e)
            })) || t.some((function (e) {
              return r.includes(e.replaceAll(' ', ''))
            }))
          }
        },
        id: 'affirmation'
      },
      {
        desc: 'Paul has hatched! Please don\'t forget to feed him, he eats three 🐛 every minute.',
        test: function (e, t) {
          var r = t.paulEating;
          return {
            isValid: e.includes('🐛') || r
          }
        },
        id: 'hatch'
      },
      {
        desc: function (e) {
          var t = e.randomYoutubeDuration,
          r = Math.floor(t / 60),
          o = t - 60 * r,
          n = !1,
          l = '';
          return r > 0 && (l += ''.concat(r, ' minute')),
          o > 0 ? l += ' '.concat(o, ' second') : n = !0,
          'Your password must include the URL of a'.concat(n ? 'n exactly' : '', ' ').concat(l, ' long YouTube video.')
        },
        test: function (e, t) {
          var r = t.currYoutubeDuration,
          o = t.randomYoutubeDuration;
          return {
            isValid: Math.abs(o - r) <= 1
          }
        },
        id: 'youtube',
        hasDelay: !0
      },
      {
        desc: 'A sacrifice must be made. Pick 2 letters that you will no longer be able to use.',
        test: function (e, t) {
          var r = t.sacraficedLetters;
          if (e = e.toUpperCase(), 2 !== r.length) return {
            isValid: !1
          };
          for (var i = 0; i < r.length; i++) if (e.includes(r[i])) return {
            isValid: !1
          };
          return {
            isValid: !0
          }
        },
        highlight: function (e, t) {
          for (var r = t.sacraficedLetters, o = e.toUpperCase(), n = [
          ], l = 0; l < o.length; l++) r.includes(o[l]) && n.push(l);
          return n
        },
        id: 'sacrafice',
        hasDelay: !0
      },
      {
        desc: 'Your password must contain twice as many italic characters as bold.',
        test: function (e, t) {
          var r = t.doc,
          n = (t.passwordLength, 0),
          l = 0;
          return r.descendants((function (e, t) {
            e.text && (e.marks.some((function (mark) {
              return 'bold' === mark.type.name
            })) && (n += Object(o.a) (e.text).length), e.marks.some((function (mark) {
              return 'italic' === mark.type.name
            })) && (l += Object(o.a) (e.text).length))
          })),
          {
            isValid: l >= 2 * n
          }
        },
        id: 'twice-italic'
      },
      {
        desc: 'At least 30% of your password must be in the Wingdings font.',
        test: function (e, t) {
          var r = t.doc,
          n = t.passwordLength,
          l = 0;
          return r.descendants((function (e, t) {
            e.text && e.marks.some((function (mark) {
              return 'textStyle' === mark.type.name && 'Wingdings' === mark.attrs.fontFamily
            })) && (l += Object(o.a) (e.text).length)
          })),
          {
            isValid: l / n >= 0.3
          }
        },
        id: 'wingdings'
      },
      {
        desc: 'Your password must include this color in hex.',
        test: function (e, t) {
          var r = t.randomColor,
          o = e.match(/#[0-9A-Fa-f]{6}/g);
          if (!o) return {
            isValid: !1
          };
          for (var n = parseInt(r.replace('#', ''), 16), i = 0; i < o.length; i++) {
            var l = parseInt(o[i].replace('#', ''), 16);
            if (Math.abs(l - n) <= 5) return {
              isValid: !0
            }
          }
          return {
            isValid: !1
          }
        },
        id: 'hex'
      },
      {
        desc: 'All roman numerals must be in Times New Roman.',
        test: function (e, t) {
          var r = t.doc,
          n = Object(o.a) (e.matchAll(w)),
          l = [
          ],
          c = [
          ];
          n.forEach((function (e) {
            var t = e[0] || e[1] || e[2] || e[3];
            if ('' !== t) for (var r = 0; r < t.length; r++) l.push(e.index + r)
          }));
          var d = !0;
          return r.descendants((function (e, t) {
            if (e.text) for (var r = e.marks.some((function (mark) {
              return 'textStyle' === mark.type.name && 'Times New Roman' === mark.attrs.fontFamily
            })), i = 0; i < Object(o.a) (e.text).length; i++) l.includes(t + i - 1) && (r || (!0, d = !1, c.push(t + i - 1)))
          })),
          {
            isValid: d,
            highlights: c
          }
        },
        id: 'times-new-roman'
      },
      {
        desc: 'The font size of every digit must be equal to its square.',
        test: function (e, t) {
          var r = t.doc,
          n = !0,
          l = [
          ];
          return r.descendants((function (e, t) {
            if (e.text) {
              var r,
              c,
              mark = e.marks.find((function (mark) {
                return 'textStyle' === mark.type.name
              })),
              d = parseInt((null == mark || null === (r = mark.attrs) || void 0 === r || null === (c = r.fontSize) || void 0 === c ? void 0 : c.split('px') [0]) || 28);
              Object(o.a) (e.text.matchAll(/([0-9])/g)).forEach((function (e) {
                var r = parseInt(e[0]);
                r * r !== d && (n = !1, l.push(t + e.index - 1))
              }))
            }
          })),
          {
            isValid: n,
            highlights: l
          }
        },
        id: 'digit-font-size'
      },
      {
        desc: 'Every instance of the same letter must have a different font size.',
        test: function (e, t) {
          var r = t.doc,
          n = !0,
          l = [
          ],
          c = {
          };
          return r.descendants((function (e, t) {
            if (e.text) {
              var r,
              d,
              mark = e.marks.find((function (mark) {
                return 'textStyle' === mark.type.name
              })),
              m = parseInt((null == mark || null === (r = mark.attrs) || void 0 === r || null === (d = r.fontSize) || void 0 === d ? void 0 : d.split('px') [0]) || 28);
              Object(o.a) (e.text.matchAll(/([a-zA-Z])/g)).forEach((function (e) {
                var r = e[0].toLowerCase() + m;
                c[r] ? (n = !1, l.push(t + e.index - 1)) : c[r] = !0
              }))
            }
          })),
          {
            isValid: n,
            highlights: l
          }
        },
        id: 'letter-font-size'
      },
      {
        desc: 'Your password must include the length of your password.',
        test: function (e, t) {
          var r = t.passwordLength;
          return {
            isValid: e.includes(r)
          }
        },
        id: 'include-length'
      },
      {
        desc: 'The length of your password must be a prime number.',
        test: function (e, t) {
          for (var r = t.passwordLength, i = 2, s = Math.sqrt(r); i <= s; i++) if (r % i == 0) return {
            isValid: !1
          };
          return {
            isValid: r > 1
          }
        },
        id: 'prime-length'
      },
      {
        desc: 'Uhhh let\'s skip this one.',
        test: function (e) {
          return {
            isValid: !0
          }
        },
        id: 'skip'
      },
      {
        desc: 'Your password must include the current time.',
        test: function (e) {
          var time = (new Date).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: !0
          }).split(' ') [0];
          return {
            isValid: e.includes(time)
          }
        },
        id: 'time'
      },
      {
        desc: 'Is this your final password?',
        test: function (e) {
          return {
            isValid: !1
          }
        },
        id: 'final'
      }
    ],
    Q = r(34),
    C = (r(276), {
      props: {
        captcha: {
          type: String,
          required: !0
        }
      }
    }),
    N = (r(965), r(28)),
    A = Object(N.a) (C, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'captcha-wrapper'
      }, [
        t('img', {
          staticClass: 'captcha-img',
          attrs: {
            src: '/password-game/captchas/'.concat(e.captcha, '.png')
          }
        }),
        e._v(' '),
        t('img', {
          staticClass: 'captcha-refresh',
          attrs: {
            src: '/password-game/refresh.svg'
          },
          on: {
            click: function (t) {
              return e.$emit('captchaRefresh')
            }
          }
        })
      ])
    }), [
    ], !1, null, '23a0f4d4', null).exports,
    S = [
      {
        sol: 'Nf6+',
        black: !1,
        fen: 'r2qkb1r/pp2nppp/3p4/2pNN1B1/2BnP3/3P4/PPP2PPP/R2bK2R w KQkq - 1 0'
      },
      {
        sol: 'Qd5+',
        black: !1,
        fen: '1rb4r/pkPp3p/1b1P3n/1Q6/N3Pp2/8/P1P3PP/7K w - - 1 0'
      },
      {
        sol: 'Qb8+',
        black: !1,
        fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 0'
      },
      {
        sol: 'Qd8+',
        black: !1,
        fen: 'r1b2k1r/ppp1bppp/8/1B1Q4/5q2/2P5/PPP2PPP/R3R1K1 w - - 1 0'
      },
      {
        sol: 'Qxg6+',
        black: !1,
        fen: '5rkr/pp2Rp2/1b1p1Pb1/3P2Q1/2n3P1/2p5/P4P2/4R1K1 w - - 1 0'
      },
      {
        sol: 'Qxd7+',
        black: !1,
        fen: '1r1kr3/Nbppn1pp/1b6/8/6Q1/3B1P2/Pq3P1P/3RR1K1 w - - 1 0'
      },
      {
        sol: 'Qxf8+',
        black: !1,
        fen: '5rk1/1p1q2bp/p2pN1p1/2pP2Bn/2P3P1/1P6/P4QKP/5R2 w - - 1 0'
      },
      {
        sol: 'Qd7+',
        black: !1,
        fen: 'r1nk3r/2b2ppp/p3b3/3NN3/Q2P3q/B2B4/P4PPP/4R1K1 w - - 1 0'
      },
      {
        sol: 'Qg6+',
        black: !1,
        fen: 'r4br1/3b1kpp/1q1P4/1pp1RP1N/p7/6Q1/PPB3PP/2KR4 w - - 1 0'
      },
      {
        sol: 'Qxh6+',
        black: !1,
        fen: 'r1b2k1r/ppppq3/5N1p/4P2Q/4PP2/1B6/PP5P/n2K2R1 w - - 1 0'
      },
      {
        sol: 'Qg4+',
        black: !1,
        fen: 'r2q1b1r/1pN1n1pp/p1n3k1/4Pb2/2BP4/8/PPP3PP/R1BQ1RK1 w - - 1 0'
      },
      {
        sol: 'Qxh6+',
        black: !1,
        fen: '3q2r1/4n2k/p1p1rBpp/PpPpPp2/1P3P1Q/2P3R1/7P/1R5K w - - 1 0'
      },
      {
        sol: 'Qg6+',
        black: !1,
        fen: 'r2qk2r/pb4pp/1n2Pb2/2B2Q2/p1p5/2P5/2B2PPP/RN2R1K1 w - - 1 0'
      },
      {
        sol: 'Rg1+',
        black: !0,
        fen: '6k1/pp4p1/2p5/2bp4/8/P5Pb/1P3rrP/2BRRN1K b - - 0 1'
      },
      {
        sol: 'Qxh5+',
        black: !1,
        fen: 'rnbqkbn1/ppppp3/7r/6pp/3P1p2/3BP1B1/PPP2PPP/RN1QK1NR w - - 1 0'
      },
      {
        sol: 'Ne7',
        black: !1,
        fen: 'r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 1 0'
      },
      {
        sol: 'Qc3+',
        black: !0,
        fen: '8/2r5/1k5p/1pp4P/8/K2P4/PR2QB2/2q5 b - - 0 1'
      },
      {
        sol: 'Qf5+',
        black: !1,
        fen: 'r1b3nr/ppqk1Bbp/2pp4/4P1B1/3n4/3P4/PPP2QPP/R4RK1 w - - 1 0'
      },
      {
        sol: 'Bf6+',
        black: !1,
        fen: '3k1r1r/pb3p2/1p4p1/1B2B3/3qn3/6QP/P4RP1/2R3K1 w - - 1 0'
      },
      {
        sol: 'Qc8+',
        black: !1,
        fen: 'rn2kb1r/1pQbpppp/1p6/qp1N4/6n1/8/PPP3PP/2KR2NR w - - 1 0'
      },
      {
        sol: 'Re8+',
        black: !1,
        fen: 'r2k2nr/pp1b1Q1p/2n4b/3N4/3q4/3P4/PPP3PP/4RR1K w - - 1 0'
      },
      {
        sol: 'Rc1+',
        black: !0,
        fen: '7k/1p4p1/p4b1p/3N3P/2p5/2rb4/PP2r3/K2R2R1 b - - 0 1'
      },
      {
        sol: 'Bf4+',
        black: !1,
        fen: 'r2q2nr/5p1p/p1Bp3b/1p1NkP2/3pP1p1/2PP2P1/PP5P/R1Bb1RK1 w - - 1 0'
      },
      {
        sol: 'Ne6+',
        black: !1,
        fen: 'r2q1k1r/ppp1bB1p/2np4/6N1/3PP1bP/8/PPP5/RNB2RK1 w - - 1 0'
      },
      {
        sol: 'Qf8+',
        black: !1,
        fen: '6k1/1p1r1pp1/p1r3b1/3pPqB1/2pP4/Q1P4R/P3P2K/6R1 w - - 1 0'
      },
      {
        sol: 'Bf5+',
        black: !0,
        fen: 'r1b3k1/ppp3pp/8/3pB3/1P1P4/3K1P2/PP1n1q1P/R2Q3R b - - 0 1'
      },
      {
        sol: 'Qxc6+',
        black: !1,
        fen: '2kr1b1r/pp3ppp/2p1b2q/4B3/4Q3/2PB2R1/PPP2PPP/3R2K1 w - - 1 0'
      },
      {
        sol: 'Qxb8+',
        black: !1,
        fen: 'rn2kb1r/pp3ppp/4p1qn/1p4B1/2B5/3P2QP/PPP2PP1/R3K2R w - - 1 0'
      },
      {
        sol: 'Qxd6+',
        black: !1,
        fen: 'rnb2b1r/p3kBp1/3pNn1p/2pQN3/1p2PP2/4B3/Pq5P/4K3 w - - 1 0'
      },
      {
        sol: 'Rd8+',
        black: !1,
        fen: 'r1b1k2r/ppQ1q2n/2p2p2/P3p2p/N3P1pP/1B4P1/1PP2P2/3R1NK1 w - - 1 0'
      },
      {
        sol: 'Nd3+',
        black: !0,
        fen: 'r6k/pp4pp/1b1P4/8/1n4Q1/2N1RP2/PPq3p1/1RB1K3 b - - 0 1'
      },
      {
        sol: 'Rxb6+',
        black: !1,
        fen: '8/1r5p/kpQ3p1/p3rp2/P6P/8/4bPPK/1R6 w - - 1 0'
      },
      {
        sol: 'Qxf7+',
        black: !1,
        fen: 'r1b2rk1/2p2ppp/p7/1p6/3P3q/1BP3bP/PP3QP1/RNB1R1K1 w - - 1 0'
      },
      {
        sol: 'Nf6+',
        black: !1,
        fen: 'r2qkb1r/2p1nppp/p2p4/np1NN3/4P3/1BP5/PP1P1PPP/R1B1K2R w - - 1 0'
      },
      {
        sol: 'Qe7+',
        black: !1,
        fen: 'rnbkn2r/pppp1Qpp/5b2/3NN3/3Pp3/8/PPP1KP1P/R1B4q w - - 1 0'
      },
      {
        sol: 'Rg8+',
        black: !1,
        fen: '4rk2/2pQn2p/p4p2/1p2pN1P/4q3/2P3R1/5PPK/8 w - - 1 0'
      },
      {
        sol: 'Qxf7+',
        black: !1,
        fen: 'r1b2rk1/pp3ppp/3p4/3Q1nq1/2B1R3/8/PP3PPP/R5K1 w - - 1 0'
      },
      {
        sol: 'Be3+',
        black: !0,
        fen: '7r/p3ppk1/3p4/2p1P1Kp/2Pb4/3P1QPq/PP5P/R6R b - - 0 1'
      },
      {
        sol: 'Nh4+',
        black: !0,
        fen: 'rn2kb1r/ppp1pppp/8/8/4q3/3P1N1b/PPP1BPnP/RNBQ1K1R b kq - 0 1'
      },
      {
        sol: 'Qxe6+',
        black: !1,
        fen: 'r1b1kb1r/pp1n1pp1/1qp1p2p/6B1/2PPQ3/3B1N2/P4PPP/R4RK1 w - - 1 0'
      },
      {
        sol: 'Qf8+',
        black: !1,
        fen: '6k1/5p2/1p5p/p4Np1/5q2/Q6P/PPr5/3R3K w - - 1 0'
      },
      {
        sol: 'Qf6+',
        black: !1,
        fen: 'r3q3/ppp3k1/3p3R/5b2/2PR3Q/2P1PrP1/P7/4K3 w - - 1 0'
      },
      {
        sol: 'Nb5+',
        black: !0,
        fen: 'r3k2r/1Bp2ppp/8/4q1b1/pP1n4/P1KP3P/1BP5/R2Q3R b - - 0 1'
      },
      {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r1bq2rk/pp3pbp/2p1p1pQ/7P/3P4/2PB1N2/PP3PPR/2KR4 w - - 1 0'
      },
      {
        sol: 'Qxb7+',
        black: !1,
        fen: 'k1n3rr/Pp3p2/3q4/3N4/3Pp2p/1Q2P1p1/3B1PP1/R4RK1 w - - 1 0'
      },
      {
        sol: 'Qg1+',
        black: !0,
        fen: '8/1p3k2/4p1rp/p3Pp1Q/3qnP2/1P6/P6P/2R2R1K b - - 0 1'
      },
      {
        sol: 'Bh6+',
        black: !1,
        fen: 'r1bq3r/ppp1b1kp/2n3p1/3B3Q/3p4/8/PPP2PPP/RNB2RK1 w - - 1 0'
      },
      {
        sol: 'Rxf6+',
        black: !1,
        fen: '4r3/pbpn2n1/1p1prp1k/8/2PP2PB/P5N1/2B2R1P/R5K1 w - - 1 0'
      },
      {
        sol: 'Qxh6+',
        black: !1,
        fen: '1q5r/1b1r1p1k/2p1pPpb/p1Pp4/3B1P1Q/1P4P1/P4KB1/2RR4 w - - 1 0'
      },
      {
        sol: 'h5+',
        black: !1,
        fen: 'r4R2/1b2n1pp/p2Np1k1/1pn5/4pP1P/8/PPP1B1P1/2K4R w - - 1 0'
      },
      {
        sol: 'Nxd7+',
        black: !1,
        fen: 'r1bqk2r/bppp1ppp/8/PB2N3/3n4/B7/2PPQnPP/RN2K2R w KQkq - 1 0'
      },
      {
        sol: 'Rxh2+',
        black: !0,
        fen: '1r4k1/3b2pp/1b1pP2r/pp1P4/4q3/8/PP4RP/2Q2R1K b - - 0 1'
      },
      {
        sol: 'Bb5+',
        black: !0,
        fen: '8/2k2p2/2b3p1/P1p1Np2/1p3b2/1P1K4/5r2/R3R3 b - - 0 1'
      },
      {
        sol: 'Rg8+',
        black: !1,
        fen: 'r4r1k/2qb3p/p2p1p2/1pnPN3/2p1Pn2/2P1N3/PPB1QPR1/6RK w - - 1 0'
      },
      {
        sol: 'Qh8+',
        black: !1,
        fen: '1r2q3/1R6/3p1kp1/1ppBp1b1/p3Pp2/2PP4/PP3P2/5K1Q w - - 1 0'
      },
      {
        sol: 'Bh5+',
        black: !1,
        fen: 'r3kb1r/pb6/2p2p1p/1p2pq2/2pQ3p/2N2B2/PP3PPP/3RR1K1 w - - 1 0'
      },
      {
        sol: 'Qh7+',
        black: !1,
        fen: '4r3/2q1rpk1/p3bN1p/2p3p1/4QP2/2N4P/PP4P1/5RK1 w - - 1 0'
      },
      {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r5rk/pp1np1bn/2pp2q1/3P1bN1/2P1N2Q/1P6/PB2PPBP/3R1RK1 w - - 1 0'
      },
      {
        sol: 'Ne5+',
        black: !1,
        fen: 'rn1qkb1r/4p2p/2p2nN1/p4p1Q/PpBP4/8/1P3PPP/R1B1K2R w - - 1 0'
      },
      {
        sol: 'Qxg7+',
        black: !1,
        fen: 'r1b2rk1/ppppbpp1/7p/4R3/6Qq/2BB4/PPP2PPP/R5K1 w - - 1 0'
      },
      {
        sol: 'Rh8+',
        black: !1,
        fen: '1r3k2/2n1p1b1/3p2QR/p1pq1pN1/bp6/7P/2P2PP1/4RBK1 w - - 1 0'
      },
      {
        sol: 'Rxh6+',
        black: !1,
        fen: '5b2/1p3rpk/p1b3Rp/4B1RQ/3P1p1P/7q/5P2/6K1 w - - 1 0'
      },
      {
        sol: 'Qxe8+',
        black: !1,
        fen: 'r2Rnk1r/1p2q1b1/7p/6pQ/4Ppb1/1BP5/PP3BPP/2K4R w - - 1 0'
      },
      {
        sol: 'Rxe8+',
        black: !1,
        fen: 'r2qr2k/pp1b3p/2nQ4/2pB1p1P/3n1PpR/2NP2P1/PPP5/2K1R1N1 w - - 1 0'
      },
      {
        sol: 'Qxh6+',
        black: !1,
        fen: '4r3/p2r1p1k/3q1Bpp/4P3/1PppR3/P5P1/5P1P/2Q3K1 w - - 1 0'
      },
      {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r3n1rk/q3NQ1p/p2pbP2/1p4p1/1P1pP1P1/3R4/P1P4P/3B2K1 w - - 1 0'
      },
      {
        sol: 'Kh6',
        black: !0,
        fen: '8/2r2pk1/3p2p1/3Pb3/2P1P2K/6r1/1R2B3/1R6 b - - 0 1'
      },
      {
        sol: 'Be1+',
        black: !1,
        fen: '8/8/p3p3/3b1pR1/1B3P1k/8/4r1PK/8 w - - 1 0'
      },
      {
        sol: 'Rxg7+',
        black: !1,
        fen: 'Q7/2r2rpk/2p4p/7N/3PpN2/1p2P3/1K4R1/5q2 w - - 1 0'
      },
      {
        sol: 'Qxg7+',
        black: !1,
        fen: 'r3rknQ/1p1R1pb1/p3pqBB/2p5/8/6P1/PPP2P1P/4R1K1 w - - 1 0'
      },
      {
        sol: 'Rg7',
        black: !1,
        fen: '4rr2/1p5R/3p1p2/p2Bp3/P2bPkP1/1P5R/1P2K3/8 w - - 1 0'
      },
      {
        sol: 'Bd6+',
        black: !1,
        fen: 'r4kr1/pbNn1q1p/1p6/2p2BPQ/5B2/8/P6P/b4RK1 w - - 1 0'
      },
      {
        sol: 'Ng6+',
        black: !1,
        fen: '6rk/6pp/5p2/p7/P2Q1N2/4P1P1/2r2n1P/6K1 w - - 1 0'
      },
      {
        sol: 'Qh3+',
        black: !1,
        fen: '1n6/p3q2p/2pNk3/1pP1p3/1P2P2Q/2P3P1/6K1/8 w - - 1 0'
      },
      {
        sol: 'Rg1+',
        black: !0,
        fen: '6rk/p3p2p/1p2Pp2/2p2P2/2P1nBr1/1P6/P6P/3R1R1K b - - 0 1'
      },
      {
        sol: 'Qg1+',
        black: !0,
        fen: '3rk3/1p3p2/2p5/7P/1P1qpp1R/P5P1/2Q5/3BK3 b - - 0 1'
      },
      {
        sol: 'Rh8+',
        black: !1,
        fen: '2QR4/6b1/1p4pk/7p/5n1P/4rq2/5P2/5BK1 w - - 1 0'
      },
      {
        sol: 'Rf6',
        black: !1,
        fen: 'r3q1k1/5p2/3P2pQ/Ppp5/1pnbN2R/8/1P4PP/5R1K w - - 1 0'
      },
      {
        sol: 'Re7+',
        black: !1,
        fen: '5b2/R4p1p/1r2kp2/1p2pN2/2r1P3/P1P3P1/1PK4P/3R4 w - - 1 0'
      },
      {
        sol: 'Qh6+',
        black: !1,
        fen: 'r3q1r1/1p2bNkp/p3n3/2PN1B1Q/PP1P1p2/7P/5PP1/6K1 w - - 1 0'
      },
      {
        sol: 'Qxh7+',
        black: !1,
        fen: '1r2q2k/4N2p/3p1Pp1/2p1n1P1/2P5/p2P2KQ/P3R3/8 w - - 1 0'
      },
      {
        sol: 'Rf6+',
        black: !1,
        fen: '5R2/4r1r1/1p4k1/p1pB2Bp/P1P4K/2P1p3/1P6/8 w - - 1 0'
      },
      {
        sol: 'Qf7+',
        black: !1,
        fen: '2bq1rk1/r1p1b1pn/p2pP1Np/1p1B1Q2/4P3/2P4P/PP3PP1/R1B1R1K1 w - - 1 0'
      },
      {
        sol: 'Bb6+',
        black: !1,
        fen: '1nbk1b1r/1r6/p2P2pp/1B2PpN1/2p2P2/2P1B3/7P/R3K2R w - - 1 0'
      },
      {
        sol: 'Rxg6+',
        black: !1,
        fen: '3r2k1/p1p2p2/bp2p1nQ/4PB1P/2pr3q/6R1/PP3PP1/3R2K1 w - - 1 0'
      },
      {
        sol: 'Qh8+',
        black: !1,
        fen: '6k1/3r3p/p1q3pP/1p1p4/3Q4/4R1P1/P4PK1/8 w - - 1 0'
      },
      {
        sol: 'Rxh3+',
        black: !0,
        fen: '2k4r/ppp5/4bqp1/3p2Q1/6n1/2NB3P/PPP2bP1/R1B2R1K b - - 0 1'
      },
      {
        sol: 'Rxh7+',
        black: !1,
        fen: 'r2r3k/b1qn2pp/1p2Bp2/2p2P2/PP1pQ3/7R/1B3PPP/5RK1 w - - 1 0'
      },
      {
        sol: 'Nf5+',
        black: !1,
        fen: '8/1p3Qb1/p5pk/P1p1p1p1/1P2P1P1/2P1N2n/5P1P/4qB1K w - - 1 0'
      },
      {
        sol: 'Rxf7+',
        black: !1,
        fen: '3rrk2/2p2pR1/p4n2/1p1PpP2/2p2q1P/3P1BQ1/PPP5/6RK w - - 1 0'
      },
      {
        sol: 'Rf7+',
        black: !1,
        fen: 'r4kr1/1b2R1n1/pq4p1/4Q3/1p4P1/5P2/PPP4P/1K2R3 w - - 1 0'
      },
      {
        sol: 'f5+',
        black: !1,
        fen: '3n4/1R6/p5k1/2B5/1P3PK1/r7/8/8 w - - 1 0'
      },
      {
        sol: 'Rh8+',
        black: !1,
        fen: '1r3rk1/1pnnq1bR/p1pp2B1/P2P1p2/1PP1pP2/2B3P1/5PK1/2Q4R w - - 1 0'
      },
      {
        sol: 'Qxf2+',
        black: !0,
        fen: 'b3r1k1/5ppp/p2p4/p4qN1/Q2b4/6R1/5PPP/5RK1 b - - 0 1'
      },
      {
        sol: 'Qxf8+',
        black: !1,
        fen: '5r1k/pp1n1p1p/5n1Q/3p1pN1/3P4/1P4RP/P1r1qPP1/R5K1 w - - 1 0'
      },
      {
        sol: 'Re8+',
        black: !1,
        fen: '5k2/p3Rr2/1p4pp/q4p2/1nbQ1P2/6P1/5N1P/3R2K1 w - - 1 0'
      },
      {
        sol: 'Rxf6+',
        black: !1,
        fen: '4rk2/pp2N1bQ/5p2/8/2q5/P7/3r2PP/4RR1K w - - 1 0'
      },
      {
        sol: 'Qh3+',
        black: !0,
        fen: 'r4rk1/4bp2/1Bppq1p1/4p1n1/2P1Pn2/3P2N1/P2Q1PBK/1R5R b - - 0 1'
      },
      {
        sol: 'Nf3',
        black: !1,
        fen: '2q1r3/4pR2/3rQ1pk/p1pnN2p/Pn5B/8/1P4PP/3R3K w - - 1 0'
      },
      {
        sol: 'Qxe6+',
        black: !1,
        fen: 'q2br1k1/1b4pp/3Bp3/p6n/1p3R2/3B1N2/PP2QPPP/6K1 w - - 1 0'
      },
      {
        sol: 'Rg8+',
        black: !1,
        fen: '5r1k/p2n1p1p/5P1N/1p1p4/2pP3P/8/PP4RK/8 w - - 1 0'
      },
      {
        sol: 'Qe8+',
        black: !1,
        fen: '8/7p/5pk1/3n2pq/3N1nR1/1P3P2/P6P/4QK2 w - - 1 0 '
      },
      {
        sol: 'Rxf5+',
        black: !1,
        fen: '2Q5/pp2rk1p/3p2pq/2bP1r2/5RR1/1P2P3/PB3P1P/7K w - - 1 0'
      },
      {
        sol: 'Qxh2+',
        black: !0,
        fen: '4r1k1/pQ3pp1/7p/4q3/4r3/P7/1P2nPPP/2BR1R1K b - - 0 1'
      },
      {
        sol: 'Rxf8+',
        black: !1,
        fen: '3R1rk1/1pp2pp1/1p6/8/8/P7/1q4BP/3Q2K1 w - - 1 0'
      },
      {
        sol: 'Rxg6+',
        black: !1,
        fen: '6k1/5p2/p3bRpQ/4q3/2r3P1/6NP/P1p2R1K/1r6 w - - 1 0'
      },
      {
        sol: 'Bf2+',
        black: !0,
        fen: 'rnb1k2r/pp3ppp/1qp2B2/2bPp3/4P3/2N5/PPP3PP/R2QKBNR b KQkq - 0 1'
      },
      {
        sol: 'Qxc3+',
        black: !0,
        fen: 'r2r4/pp2ppkp/2P3p1/q1p5/4PQ2/2P2b2/P4PPP/2R1KB1R b - - 0 1'
      },
      {
        sol: 'Nd4+',
        black: !1,
        fen: '8/8/2N1P3/1P6/4Q3/4b2K/4k3/4q3 w - - 1 0'
      },
      {
        sol: 'Qxh3+',
        black: !0,
        fen: '1b2r1k1/3n2p1/p3p2p/1p3r2/3PNp1q/3BnP1P/PP1BQP1K/R6R b - - 0 1'
      },
      {
        sol: 'Nf4+',
        black: !1,
        fen: '5b2/q4r1p/p3k1p1/2pNppP1/1P6/3Q1P1P/P7/1K1R4 w - - 1 0'
      },
      {
        sol: 'Qg2+',
        black: !0,
        fen: '8/2p5/Q4pk1/p1Pp4/5n2/PP3PK1/2q4N/8 b - - 0 1'
      },
      {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r3nr1k/1b2Nppp/pn6/q3p1P1/P1p4Q/R7/1P2PP1P/2B2RK1 w - - 1 0'
      },
      {
        sol: 'Qh2+',
        black: !0,
        fen: 'r1b3nr/ppp1kB1p/3p4/8/3PPBnb/1Q3p2/PPP2q2/RN4RK b - - 0 1'
      },
      {
        sol: 'Qh1+',
        black: !0,
        fen: 'q5k1/5rb1/r6p/1Np1n1p1/3p1Pn1/1N4P1/PP5P/R1BQRK2 b - - 0 1'
      },
      {
        sol: 'Qxh3+',
        black: !0,
        fen: '8/2P2pk1/3Q4/4pq2/7p/6pP/2r3P1/6RK b - - 0 1'
      },
      {
        sol: 'Rxg7+',
        black: !1,
        fen: '8/p1R3p1/4p1kn/3p3N/3Pr2P/6P1/PP3K2/8 w - - 1 0'
      },
      {
        sol: 'Qd8+',
        black: !1,
        fen: 'r1b1k2r/1p2bppp/p3q3/1p2p1B1/8/3Q1N2/PPP2PPP/3R1RK1 w kq - 1 0'
      },
      {
        sol: 'Rd8+',
        black: !1,
        fen: 'rn2k2r/pp2b2p/2p1Q1p1/5B2/1q3B2/8/PPP3PP/3RR2K w kq - 1 0'
      },
      {
        sol: 'Rd8+',
        black: !1,
        fen: 'r1b1k2r/pp3ppp/2n1p3/6B1/2p1q3/Q7/PP2PPPP/3RKB1R w Kkq - 1 0'
      },
      {
        sol: 'Nd5+',
        black: !0,
        fen: '2k4r/1pp1n1pp/p1pr1pb1/4p3/Nq2P1P1/1P1PKN1P/2P1QP2/3R3R b - - 0 1'
      },
      {
        sol: 'Rc8+',
        black: !1,
        fen: '5k1r/4npp1/p3p2p/3nP2P/3P3Q/3N4/qB2KPP1/2R5 w - - 1 0'
      },
      {
        sol: 'g5+',
        black: !1,
        fen: '2r5/2R5/3npkpp/3bN3/p4PP1/4K3/P1B4P/8 w - - 1 0'
      },
      {
        sol: 'Rh4+',
        black: !1,
        fen: '5r1r/1p6/p1p2p2/2P1bPpk/4R3/6PP/P2B2K1/3R4 w - - 1 0'
      },
      {
        sol: 'Ng6+',
        black: !1,
        fen: '5qrk/5p1n/pp3p1Q/2pPp3/2P1P1rN/2P4R/P5P1/2B3K1 w - - 1 0'
      },
      {
        sol: 'Qxe6+',
        black: !1,
        fen: '3rk2r/p1qn1pp1/1p2pb1p/7P/2Pp4/B1P1QP2/P1B1KP2/3R3R w k - 1 0'
      },
      {
        sol: 'Bf7+',
        black: !1,
        fen: 'r3kb1r/q5pp/p1p1Bnn1/1p2Q3/8/2N2PBP/PPP5/2KRR3 w - - 1 0'
      },
      {
        sol: 'Ne7+',
        black: !1,
        fen: 'rq3rk1/3n1pp1/pb4n1/3N2P1/1pB1QP2/4B3/PP6/2KR3R w - - 1 0'
      },
      {
        sol: 'Nh8+',
        black: !1,
        fen: '3q2r1/p2b1k2/1pnBp1N1/3p1pQP/6P1/5R2/2r2P2/4RK2 w - - 1 0'
      },
      {
        sol: 'Rxf1+',
        black: !0,
        fen: '8/p4pk1/6p1/3R4/3nqN1P/2Q3P1/5P2/3r1BK1 b - - 0 1'
      },
      {
        sol: 'Bxg6+',
        black: !1,
        fen: '2r5/3nbkp1/2q1p1p1/1p1n2P1/3P4/2p1P1NQ/1P1B1P2/1B4KR w - - 1 0'
      },
      {
        sol: 'Nxf7+',
        black: !1,
        fen: 'r1bq1rkb/ppp2n1p/5n2/4p1NN/5pQ1/1BP5/PP3PPP/R1B1K2R w KQ - 1 0'
      },
      {
        sol: 'Re5+',
        black: !1,
        fen: '4r3/1b2r2p/p2p2k1/P1pP1R1N/3b4/1P1B3P/3n2P1/5R1K w - - 1 0'
      },
      {
        sol: 'Rf8+',
        black: !1,
        fen: '2b3k1/1p5p/2p1n1pQ/3qB3/3P4/3B3P/r5P1/5RK1 w - - 1 0'
      },
      {
        sol: 'Rxe6+',
        black: !1,
        fen: '3rk2r/1pR2p2/b2BpPp1/p2p4/8/1P6/P4PPP/4R1K1 w - - 1 0'
      },
      {
        sol: 'Rxh7+',
        black: !1,
        fen: '4nr1k/1bq3pp/5p2/1p2pNQ1/3pP3/1B1P3R/1PP3PP/6K1 w - - 1 0'
      },
      {
        sol: 'Nxb7+',
        black: !1,
        fen: 'r1bk1r2/pp1n2pp/3NQ3/1P6/8/2n2PB1/q1B3PP/3R1RK1 w - - 1 0'
      },
      {
        sol: 'Qg8+',
        black: !1,
        fen: '1rb2k2/pp3ppQ/7q/2p1n1N1/2p5/2N5/P3BP1P/K2R4 w - - 1 0'
      },
      {
        sol: 'Qxh6+',
        black: !1,
        fen: '4r3/5p1k/2p1nBpp/q2p4/P1bP4/2P1R2Q/2B2PPP/6K1 w - - 1 0'
      },
      {
        sol: 'Ra1+',
        black: !0,
        fen: '2r3k1/6pp/4pp2/3bp3/1Pq5/3R1P2/r1PQ2PP/1K1RN3 b - - 0 1'
      },
      {
        sol: 'Rh8+',
        black: !1,
        fen: '6R1/5r1k/p6b/1pB1p2q/1P6/5rQP/5P1K/6R1 w - - 1 0'
      },
      {
        sol: 'Bg6+',
        black: !1,
        fen: 'r5q1/pp1b1kr1/2p2p2/2Q5/2PpB3/1P4NP/P4P2/4RK2 w - - 1 0'
      },
      {
        sol: 'Qd8+',
        black: !1,
        fen: '2r1kb1r/p2b1ppp/3p4/Q2Np1B1/4P2P/8/PP4P1/4KB1n w k - 1 0'
      },
      {
        sol: 'Qh5+',
        black: !0,
        fen: '5rk1/ppp2pbp/3p2p1/1q6/4r1P1/1NP1B3/PP2nPP1/R2QR2K b - - 0 1'
      },
      {
        sol: 'Qxg6+',
        black: !1,
        fen: 'r2q1bk1/5n1p/2p3pP/p7/3Br3/1P3PQR/P5P1/2KR4 w - - 1 0'
      },
      {
        sol: 'Qxa3+',
        black: !0,
        fen: '2b5/k2n1p2/p2q4/5R1B/2p4P/P1b5/KPQ1R3/6r1 b - - 0 1'
      },
      {
        sol: 'Bg6+',
        black: !1,
        fen: '4Q3/r4ppk/3p3p/4pPbB/2P1P3/1q5P/6P1/3R3K w - - 1 0'
      },
      {
        sol: 'Nf4+',
        black: !1,
        fen: 'rn5r/p4pp1/3n3p/qB1k4/3P4/4P3/PP2NPPP/R4K1R w - - 1 0'
      },
      {
        sol: 'Qxc3+',
        black: !0,
        fen: 'r2r2k1/pp2bppp/2p1p3/4qb1P/8/1BP1BQ2/PP3PP1/2KR3R b - - 0 1'
      },
      {
        sol: 'Ne6+',
        black: !1,
        fen: '5R2/6k1/3K4/p6r/1p1NB3/1P4r1/8/8 w - - 1 0'
      },
      {
        sol: 'Nxf7+',
        black: !1,
        fen: '5r2/1qp2pp1/bnpk3p/4NQ2/2P5/1P5P/5PP1/4R1K1 w - - 1 0'
      },
      {
        sol: 'Rxd8+',
        black: !1,
        fen: '3nk1r1/1pq4p/p3PQpB/5p2/2r5/8/P4PPP/3RR1K1 w - - 1 0'
      },
      {
        sol: 'Ng3+',
        black: !0,
        fen: '5rk1/5ppp/pq6/1r3n2/2Q2P2/1P1N4/P1P1R1PP/4R2K b - - 0 1'
      },
      {
        sol: 'Re8+',
        black: !1,
        fen: '1k3r2/4R1Q1/p2q1r2/8/2p1Bb2/5R2/pP5P/K7 w - - 1 0'
      },
      {
        sol: 'Bxf3+',
        black: !0,
        fen: '2k1r2r/ppp3p1/3b4/3pq2b/7p/2NP1P2/PPP2Q1P/R5RK b - - 0 1'
      },
      {
        sol: 'Rh2+',
        black: !0,
        fen: '3k4/1p3Bp1/p5r1/2b5/P3P1N1/5Pp1/1P1r4/2R4K b - - 0 1'
      },
      {
        sol: 'Re8+',
        black: !1,
        fen: '6k1/1r4np/pp1p1R1B/2pP2p1/P1P5/1n5P/6P1/4R2K w - - 1 0'
      },
      {
        sol: 'Bh6',
        black: !1,
        fen: '8/p2q1p1k/4pQp1/1p1b2Bp/7P/8/5PP1/6K1 w - - 1 0'
      },
      {
        sol: 'Qb5+',
        black: !1,
        fen: 'r7/6R1/ppkqrn1B/2pp3p/P6n/2N5/8/1Q1R1K2 w - - 1 0'
      },
      {
        sol: 'Qh6+',
        black: !1,
        fen: 'r2q1k1r/3bnp2/p1n1pNp1/3pP1Qp/Pp1P4/2PB4/5PPP/R1B2RK1 w - - 1 0'
      },
      {
        sol: 'Rxh7+',
        black: !1,
        fen: '6rk/1r2pR1p/3pP1pB/2p1p3/P6Q/P1q3P1/7P/5BK1 w - - 1 0'
      },
      {
        sol: 'Rxf7+',
        black: !1,
        fen: '1r2Rr2/3P1p1k/5Rpp/qp6/2pQ4/7P/5PPK/8 w - - 1 0'
      },
      {
        sol: 'Rxf8+',
        black: !1,
        fen: 'r4rk1/5Rbp/p1qN2p1/P1n1P3/8/1Q3N1P/5PP1/5RK1 w - - 1 0'
      },
      {
        sol: 'Rh6',
        black: !1,
        fen: '7R/3r4/8/3pkp1p/5N1P/b3PK2/5P2/8 w - - 1 0'
      },
      {
        sol: 'Bf5+',
        black: !1,
        fen: '8/1R3p2/3rk2p/p2p2p1/P2P2P1/3B1PN1/5K1P/r7 w - - 1 0'
      },
      {
        sol: 'Rxh6+',
        black: !1,
        fen: '8/5prk/p5rb/P3N2R/1p1PQ2p/7P/1P3RPq/5K2 w - - 1 0'
      },
      {
        sol: 'Qe6+',
        black: !1,
        fen: 'rqb2bk1/3n2pr/p1pp2Qp/1p6/3BP2N/2N4P/PPP3P1/2KR3R w - - 1 0'
      },
      {
        sol: 'Rxa7+',
        black: !1,
        fen: '1Q6/r3R2p/k2p2pP/p1q5/Pp4P1/5P2/1PP3K1/8 w - - 1 0'
      },
      {
        sol: 'Rg2+',
        black: !0,
        fen: 'N5k1/5p2/6p1/6Pp/4bb1P/P5r1/7K/2R3R1 b - - 0 1'
      },
      {
        sol: 'Qg4+',
        black: !1,
        fen: '3R4/3Q1p2/q1rn2kp/4p3/4P3/2N3P1/5P1P/6K1 w - - 1 0'
      },
      {
        sol: 'Qh1+',
        black: !0,
        fen: '6R1/2k2P2/1n5r/3p1p2/3P3b/1QP2p1q/3R4/6K1 b - - 0 1'
      },
      {
        sol: 'g4+',
        black: !1,
        fen: '5r2/7p/3R4/p3pk2/1p2N2p/1P2BP2/6PK/4r3 w - - 1 0'
      },
      {
        sol: 'Qc6+',
        black: !1,
        fen: '7r/3kbp1p/1Q3R2/3p3q/p2P3B/1P5K/P6P/8 w - - 1 0'
      },
      {
        sol: 'Rg8+',
        black: !1,
        fen: 'r4r1k/p2p3p/bp1Np3/4P3/2P2nR1/3B1q2/P1PQ4/2K3R1 w - - 1 0'
      },
      {
        sol: 'Bf6+',
        black: !1,
        fen: '1r3b2/1bp2pkp/p1q4N/1p1n1pBn/8/2P3QP/PPB2PP1/4R1K1 w - - 1 0'
      },
      {
        sol: 'Qc6',
        black: !1,
        fen: '8/k1p1q3/Pp5Q/4p3/2P1P2p/3P4/4K3/8 w - - 1 0'
      },
      {
        sol: 'f2+',
        black: !0,
        fen: '8/pp2k3/7r/2P1p1p1/4P3/5pq1/2R3N1/1R3BK1 b - - 0 1'
      },
      {
        sol: 'Ne2+',
        black: !0,
        fen: '7k/p5b1/1p4Bp/2q1p1p1/1P1n1r2/P2Q2N1/6P1/3R2K1 b - - 0 1'
      },
      {
        sol: 'Rh6+',
        black: !1,
        fen: '8/p4q2/6k1/1p3rP1/3Q4/8/PPP5/K6R w - - 1 0'
      },
      {
        sol: 'Rc1+',
        black: !0,
        fen: '2r3k1/1p3ppp/p3p3/7P/P4P2/1R2QbP1/6q1/1B2K3 b - - 0 1'
      },
      {
        sol: 'Ne4+',
        black: !0,
        fen: '6r1/p6k/Bp3n1r/2pP1P2/P4q1P/2P2Q2/5K2/2R2R2 b - - 0 1'
      },
      {
        sol: 'Ng4',
        black: !0,
        fen: '8/8/8/5P2/R2p1N2/4n1r1/PP6/5k1K b - - 0 1'
      },
      {
        sol: 'Rf7+',
        black: !1,
        fen: 'r7/4k1Pp/2n1p2P/q2pp1N1/1p4P1/1P6/P4R2/1K1R4 w - - 1 0'
      },
      {
        sol: 'Qd8+',
        black: !1,
        fen: '2Q5/1p3p2/3b1k1p/3Pp3/4B1R1/4q1P1/r4PK1/8 w - - 1 0'
      },
      {
        sol: 'Rxh6+',
        black: !1,
        fen: '8/5Qpk/p1R4p/P2p4/6P1/2rq4/5PPK/8 w - - 1 0'
      },
      {
        sol: 'Qg7+',
        black: !1,
        fen: '3n1k2/5p2/2p1bb2/1p2pN1q/1P2P3/2P3Q1/5PB1/3R2K1 w - - 1 0'
      },
      {
        sol: 'Be5+',
        black: !1,
        fen: 'rnR5/p3p1kp/4p1pn/bpP5/5BP1/5N1P/2P2P2/2K5 w - - 1 0'
      },
      {
        sol: 'Rxh6+',
        black: !1,
        fen: '6rk/6p1/4R2p/p2pP2b/5Q2/2P2PB1/1q4PK/8 w - - 1 0'
      },
      {
        sol: 'Re4+',
        black: !0,
        fen: '1Q6/8/3p1pk1/2pP4/1p3K2/5R2/5qP1/4r3 b - - 0 1'
      },
      {
        sol: 'Nf7+',
        black: !1,
        fen: 'r4r1k/pp5p/n5p1/1q2Np1n/1Pb5/6P1/PQ2PPBP/1RB3K1 w - - 1 0'
      },
      {
        sol: 'Rxh6+',
        black: !1,
        fen: '7k/p1p2bp1/3q1N1p/4rP2/4pQ2/2P4R/P2r2PP/4R2K w - - 1 0'
      },
      {
        sol: 'Rf1+',
        black: !0,
        fen: '7k/2p3pp/p7/1p1p4/PP2pr2/B1P3qP/4N1B1/R1Qn2K1 b - - 0 1'
      },
      {
        sol: 'Rg8+',
        black: !1,
        fen: 'r1b2k2/1p1p1r1B/n4p2/p1qPp3/2P4N/4P1R1/PPQ3PP/R5K1 w - - 1 0'
      }
    ],
    B = {
      props: {
        chessPuzzle: {
          type: Number,
          required: !0
        },
        currChessGuess: {
          type: Array,
          required: !0
        }
      },
      computed: {
        blackToMove: function () {
          return S[this.chessPuzzle].black
        }
      }
    },
    _ = (r(967), Object(N.a) (B, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'chess-wrapper'
      }, [
        e.currChessGuess.length > 0 ? t('div', {
          staticClass: 'guesses'
        }, e._l(e.currChessGuess, (function (r) {
          return t('div', {
            key: r
          }, [
            t('img', {
              staticClass: 'guess-icon',
              attrs: {
                src: '/password-game/error.svg'
              }
            }),
            e._v(e._s(r) + '\n    ')
          ])
        })), 0) : e._e(),
        e._v(' '),
        t('img', {
          staticClass: 'chess-img',
          attrs: {
            src: '/password-game/chess/puzzle'.concat(e.chessPuzzle, '.svg')
          }
        }),
        e._v(' '),
        t('div', {
          staticClass: 'move'
        }, [
          e._v('\n    ' + e._s(e.blackToMove ? 'Black to move' : 'White to move') + '\n  ')
        ])
      ])
    }), [
    ], !1, null, 'f5286d7c', null).exports),
    D = {
      data: function () {
        return {
          letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
          selected: [
          ],
          sacraficeMade: !1
        }
      },
      methods: {
        makeSacrifice: function () {
          this.sacraficeMade || (this.sacraficeMade = !0, this.$emit('sacrafice', this.selected))
        },
        toggle: function (e) {
          this.selected.includes(e) ? this.selected = this.selected.filter((function (t) {
            return t !== e
          })) : (this.selected.length < 2 || this.selected.pop(), this.selected.push(e))
        }
      }
    },
    K = (r(969), Object(N.a) (D, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'sacrafice-area',
        class : {
          'sacrafice-made': e.sacraficeMade
        }
      }, [
        t('div', {
          staticClass: 'letters'
        }, e._l(e.letters, (function (r) {
          return t('button', {
            key: r,
            staticClass: 'letter',
            class : {
              'letter-selected': e.selected.includes(r)
            },
            attrs: {
              disabled: e.sacraficeMade
            },
            on: {
              click: function (t) {
                return e.toggle(r)
              }
            }
          }, [
            e._v('\n      ' + e._s(r) + '\n    ')
          ])
        })), 0),
        e._v(' '),
        t('button', {
          staticClass: 'sacrafice-btn',
          attrs: {
            disabled: 2 !== e.selected.length || e.sacraficeMade
          },
          on: {
            click: e.makeSacrifice
          }
        }, [
          t('img', {
            staticClass: 'sacrafice-icon',
            attrs: {
              src: '/password-game/fire.svg'
            }
          }),
          e._v(' Sacrifice\n  ')
        ])
      ])
    }), [
    ], !1, null, '5ed0912a', null).exports),
    E = {
      props: {
        randomColor: {
          type: String,
          required: !0
        }
      }
    },
    M = (r(971), Object(N.a) (E, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'rand-color',
        style: {
          background: e.randomColor
        }
      }, [
        t('img', {
          staticClass: 'refresh',
          attrs: {
            src: '/password-game/refresh.svg'
          },
          on: {
            click: function (t) {
              return e.$emit('refreshColor')
            }
          }
        })
      ])
    }), [
    ], !1, null, '79833e4e', null).exports),
    I = {
      props: {
        place: {
          type: Object,
          required: !0
        },
        currPlaceGuess: {
          type: Array,
          required: !0
        }
      },
      computed: {
        isCorrect: function () {
          return console.log(this.currPlaceGuess, this.place.title),
          this.currPlaceGuess.includes(this.place.title)
        }
      }
    },
    z = (r(973), Object(N.a) (I, (function () {
      var e = this,
      t = e._self._c;
      return t('div', [
        e.currPlaceGuess.length > 0 ? t('div', {
          staticClass: 'guesses'
        }, e._l(e.currPlaceGuess, (function (r) {
          return t('div', {
            key: r
          }, [
            t('img', {
              staticClass: 'guess-icon',
              attrs: {
                src: '/password-game/error.svg'
              }
            }),
            e._v(e._s(r) + '\n    ')
          ])
        })), 0) : e._e(),
        e._v(' '),
        t('div', {
          staticClass: 'geo-wrapper'
        }, [
          t('iframe', {
            staticClass: 'geo',
            attrs: {
              'data-v-666b8394': '',
              src: e.place.embed,
              width: '100%',
              height: '100%'
            }
          })
        ])
      ])
    }), [
    ], !1, null, '490deea8', null).exports),
    V = {
      props: {
        passwordStrength: {
          type: Number,
          required: !0
        }
      }
    },
    L = (r(975), Object(N.a) (V, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'strength'
      }, [
        t('div', {
          staticClass: 'bars'
        }, [
          t('div', {
            staticClass: 'bar bar-red active'
          }),
          e._v(' '),
          t('div', {
            staticClass: 'bar bar-orange',
            class : {
              active: e.passwordStrength >= 1
            }
          }),
          e._v(' '),
          t('div', {
            staticClass: 'bar bar-yellow',
            class : {
              active: e.passwordStrength >= 2
            }
          }),
          e._v(' '),
          t('div', {
            staticClass: 'bar bar-green',
            class : {
              active: e.passwordStrength >= 3
            }
          })
        ])
      ])
    }), [
    ], !1, null, 'c15cedce', null).exports),
    T = (r(977), Object(N.a) ({
    }, (function () {
      this._self._c;
      return this._m(0)
    }), [
      function () {
        var e = this,
        t = e._self._c;
        return t('div', {
          staticClass: 'sponsors'
        }, [
          t('img', {
            staticClass: 'sponsor pepsi',
            attrs: {
              src: '/password-game/sponsors/pepsi.svg'
            }
          }),
          e._v(' '),
          t('img', {
            staticClass: 'sponsor starbucks',
            attrs: {
              src: '/password-game/sponsors/starbucks.svg'
            }
          }),
          e._v(' '),
          t('img', {
            staticClass: 'sponsor shell',
            attrs: {
              src: '/password-game/sponsors/shell.svg'
            }
          })
        ])
      }
    ], !1, null, '290ad9f2', null).exports),
    O = {
      props: {
        currYoutubeId: {
          type: String,
          required: !0
        }
      }
    },
    j = (r(979), r(981), {
      components: {
        Captcha: A,
        ChessPuzzle: _,
        Sacrafice: K,
        RandomColor: M,
        Geo: z,
        Strength: L,
        Sponsors: T,
        YoutubePlayer: Object(N.a) (O, (function () {
          var e = this._self._c;
          return e('div', {
            class : {
              active: '' !== this.currYoutubeId
            },
            attrs: {
              id: 'youtube-player-wrapper'
            }
          }, [
            e('div', {
              key: 'youtube-player',
              attrs: {
                id: 'youtube-player'
              }
            })
          ])
        }), [
        ], !1, null, '68e67607', null).exports
      },
      data: function () {
        return {
          showNo: !0
        }
      },
      props: {
        ruleNum: {
          type: Number,
          required: !0
        },
        rule: {
          type: Object,
          required: !0
        },
        hasError: {
          type: Boolean,
          required: !1,
        default:
          !1
        },
        captcha: {
          type: String,
          required: !0
        },
        chessPuzzle: {
          type: Number,
          required: !0
        },
        randomColor: {
          type: String,
          required: !0
        },
        passwordStrength: {
          type: Number,
          required: !0
        },
        currYoutubeId: {
          type: String,
          required: !0
        },
        randomYoutubeDuration: {
          type: Number,
          required: !0
        },
        currPlace: {
          type: Object,
          required: !0
        },
        currPlaceGuess: {
          type: Array,
          required: !0
        },
        currChessGuess: {
          type: Array,
          required: !0
        },
        numErrors: {
          type: Number,
          required: !0
        }
      }
    }),
    G = (r(983), Object(N.a) (j, (function () {
      var e,
      t = this,
      r = t._self._c;
      return r('div', {
        staticClass: 'rule',
        class : (e = {
          'rule-error': t.hasError
        }, Object(Q.a) (e, t.rule.id, !0), Object(Q.a) (e, 'final-hide', 'final' === t.rule.id && t.numErrors > 1), e)
      }, [
        r('div', {
          staticClass: 'rule-inner'
        }, [
          r('span', {
            staticClass: 'rule-top'
          }, [
            r('img', {
              staticClass: 'rule-icon',
              attrs: {
                src: '/password-game/'.concat(t.hasError ? 'error' : 'checkmark', '.svg')
              }
            }),
            t._v('\n      Rule\n      ' + t._s(t.ruleNum) + '\n    ')
          ]),
          t._v(' '),
          r('div', {
            staticClass: 'rule-desc'
          }, [
            r('div', {
              domProps: {
                innerHTML: t._s('function' == typeof t.rule.desc ? t.rule.desc({
                  randomYoutubeDuration: t.randomYoutubeDuration
                }) : t.rule.desc)
              }
            }),
            t._v(' '),
            'captcha' === t.rule.id ? r('Captcha', {
              attrs: {
                captcha: t.captcha
              },
              on: {
                captchaRefresh: function (e) {
                  return t.$emit('captchaRefresh')
                }
              }
            }) : t._e(),
            t._v(' '),
            'chess' === t.rule.id ? r('ChessPuzzle', {
              attrs: {
                chessPuzzle: t.chessPuzzle,
                currChessGuess: t.currChessGuess
              }
            }) : t._e(),
            t._v(' '),
            'sacrafice' === t.rule.id ? r('Sacrafice', {
              on: {
                sacrafice: function (e) {
                  return t.$emit('sacrafice', e)
                }
              }
            }) : t._e(),
            t._v(' '),
            'hex' === t.rule.id ? r('RandomColor', {
              attrs: {
                randomColor: t.randomColor
              },
              on: {
                refreshColor: function (e) {
                  return t.$emit('refreshColor')
                }
              }
            }) : t._e(),
            t._v(' '),
            'geo' === t.rule.id ? r('Geo', {
              attrs: {
                place: t.currPlace,
                currPlaceGuess: t.currPlaceGuess
              }
            }) : t._e(),
            t._v(' '),
            'strength' === t.rule.id ? r('Strength', {
              attrs: {
                passwordStrength: t.passwordStrength
              }
            }) : t._e(),
            t._v(' '),
            'sponsors' === t.rule.id ? r('Sponsors') : t._e(),
            t._v(' '),
            'youtube' === t.rule.id ? r('YoutubePlayer', {
              attrs: {
                currYoutubeId: t.currYoutubeId
              }
            }) : t._e(),
            t._v(' '),
            'affirmation' === t.rule.id ? r('div', {
              staticClass: 'affirmation-list'
            }, [
              t._m(0)
            ]) : t._e(),
            t._v(' '),
            'final' === t.rule.id ? r('div', {
              staticClass: 'final-password'
            }, [
              r('button', {
                on: {
                  click: function (e) {
                    return t.$emit('done')
                  }
                }
              }, [
                t._v('Yes')
              ]),
              t._v(' '),
              t.showNo ? r('button', {
                on: {
                  click: function (e) {
                    t.showNo = !1
                  }
                }
              }, [
                t._v('No')
              ]) : t._e()
            ]) : t._e()
          ], 1)
        ])
      ])
    }), [
      function () {
        var e = this,
        t = e._self._c;
        return t('ul', [
          t('li', [
            e._v('I am loved')
          ]),
          e._v(' '),
          t('li', [
            e._v('I am worthy')
          ]),
          e._v(' '),
          t('li', [
            e._v('I am enough')
          ])
        ])
      }
    ], !1, null, '520e375b', null).exports),
    Y = [
      '2b827',
      '2cg58',
      '2g783',
      '2x7bm',
      '2ycn8',
      '3bd8f',
      '3bfnd',
      '3den6',
      '3ebnn',
      '3nw7w',
      '3ny45',
      '3p4nn',
      '3pe4g',
      '3w2bw',
      '4cn7b',
      '4dgf7',
      '5n245',
      '5ng6e',
      '6dd2y',
      '6e6pn',
      '6gnm3',
      '6p7gx',
      '6xxdx',
      '7gmf3',
      '7wnpm',
      '7wyp4',
      '7xd5m',
      '7y2x4',
      '8c23f',
      '8gecm',
      '8n5pn',
      '8pfxx',
      '8w754',
      '8y63f',
      '25egp',
      '28x47',
      '33p4e',
      '34pcn',
      '44xe8',
      '47e4p',
      '53wb8',
      '58b5m',
      '64m82',
      '66wp5',
      '73mnx',
      '74eyg',
      '75pfw',
      '77n6g',
      '88y52',
      '264m5',
      '387g2',
      '573d8',
      '52447',
      'b5nmm',
      'b6f2p',
      'b28g8',
      'b84xc',
      'bbymy',
      'bdg84',
      'be3bp',
      'bgd4m',
      'bnc2f',
      'bny4w',
      'bw6n6',
      'bw44w',
      'c2fb7',
      'c2pg6',
      'c86md',
      'cdcb3',
      'cen55',
      'cfc56',
      'cffp4',
      'cgcgb',
      'cnwyc',
      'cpc8c',
      'd6fcn',
      'd22bd',
      'd378n',
      'dbex3',
      'dbfen',
      'dd5w5',
      'de45x',
      'dn5df',
      'dn26n',
      'dpbyd',
      'e7x45',
      'ebcbx',
      'ec6pm',
      'ecd4w',
      'en4n4',
      'f6ne5',
      'f75cx',
      'fc6xb',
      'g78gn',
      'gc277',
      'gfp54',
      'ggd7m',
      'gnc3n',
      'gny6b',
      'gw53m',
      'm67b3',
      'm3588',
      'mgw3n',
      'mm3nn',
      'mp7wp',
      'myc3c',
      'n2by7',
      'n3ffn',
      'n373n',
      'nbcgb',
      'nbf8m',
      'nbfx5',
      'nbp3e',
      'nc4yg',
      'ndyfe',
      'nf8b8',
      'ng2gw',
      'nnfx3',
      'nnn5p',
      'nnn57',
      'ny8np',
      'p2m6n',
      'p4pde',
      'pcede',
      'pdyc8',
      'pf5ng',
      'pm363',
      'pmf5w',
      'w8f36',
      'w52fn',
      'wc2bd',
      'wce5n',
      'wg625',
      'x3fwf',
      'x4f7g',
      'x4gg5',
      'x6b5m',
      'x38fn',
      'xbcbx',
      'xe8xm',
      'xgcxy',
      'xngxc',
      'y4n6m',
      'y5dpp',
      'y5w28',
      'y7mnm',
      'y7x8p',
      'yd755',
      'yf424'
    ],
    U = r(1128),
    W = r(985),
    Z = r(986),
    H = r(987),
    J = r(374),
    X = r(1130),
    $ = r(307),
    ee = [
      '0px',
      '1px',
      '4px',
      '9px',
      '12px',
      '16px',
      '25px',
      '28px',
      '32px',
      '36px',
      '42px',
      '49px',
      '64px',
      '81px'
    ],
    te = $.b.create({
      name: 'fontSize',
      addOptions: function () {
        return {
          types: [
            'textStyle'
          ],
          getStyle: function (e) {
            return 'font-size: '.concat(e)
          }
        }
      },
      addGlobalAttributes: function () {
        var e = this;
        return [{
          types: this.options.types,
          attributes: {
            fontSize: {
            default:
              null,
              parseHTML: function (element) {
                return element.style.fontSize.replace(/['"]+/g, '')
              },
              renderHTML: function (t) {
                return t.fontSize ? ee.includes(t.fontSize) ? {
                  style: e.options.getStyle(t.fontSize || '28px')
                }
                 : (t.fontSize = '28px', {
                  style: e.options.getStyle('28px')
                }) : {
                  style: e.options.getStyle('28px')
                }
              }
            }
          }
        }
        ]
      },
      addCommands: function () {
        return {
          setFontSize: function (e) {
            return function (t) {
              return (0, t.chain) ().setMark('textStyle', {
                fontSize: e
              }).run()
            }
          },
          unsetFontSize: function () {
            return function (e) {
              return (0, e.chain) ().setMark('textStyle', {
                fontSize: null
              }).removeEmptyTextStyle().run()
            }
          }
        }
      }
    }),
    ae = [
      'Monospace',
      'Comic Sans',
      'Wingdings',
      'Times New Roman'
    ],
    re = $.b.create({
      name: 'fontFamily',
      addOptions: function () {
        return {
          types: [
            'textStyle'
          ]
        }
      },
      addGlobalAttributes: function () {
        return [{
          types: this.options.types,
          attributes: {
            fontFamily: {
            default:
              null,
              parseHTML: function (element) {
                var e;
                return null === (e = element.style.fontFamily) || void 0 === e ? void 0 : e.replace(/['"]+/g, '')
              },
              renderHTML: function (e) {
                return e.fontFamily ? ae.includes(e.fontFamily) ? {
                  style: 'font-family: '.concat(e.fontFamily)
                }
                 : (e.fontFamily = 'Monospace', {
                  style: 'font-family: Monospace'
                }) : {
                  style: 'font-family: Monospace'
                }
              }
            }
          }
        }
        ]
      },
      addCommands: function () {
        return {
          setFontFamily: function (e) {
            return function (t) {
              return (0, t.chain) ().setMark('textStyle', {
                fontFamily: e
              }).run()
            }
          },
          unsetFontFamily: function () {
            return function (e) {
              return (0, e.chain) ().setMark('textStyle', {
                fontFamily: null
              }).removeEmptyTextStyle().run()
            }
          }
        }
      }
    }),
    oe = r(988),
    se = r(989),
    ne = [
      {
        title: 'Australia',
        link: 'https://www.google.com/maps/@-25.350684,131.0463223,3a,75y,264.26h,94.34t/data=!3m8!1e1!3m6!1sAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN34Kq9DNXau2fsEX2pXDLZfCICnWaQPku-7FQu%3Dw203-h100-k-no-pi-12.154341-ya290.7717-ro-0-fo100!7i10600!8i5300?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332510022!6m8!1m7!1sCAoSLEFGMVFpcE4zNEtxOUROWGF1MmZzRVgycFhETFpmQ0lDbldhUVBrdS03RlF1!2m2!1d-25.35068396746521!2d131.0463222711639!3f264.26!4f4.340000000000003!5f0.7820865974627469'
      },
      {
        title: 'Austria',
        link: 'https://www.google.com/maps/@47.0675829,12.7752697,3a,75y,245.99h,83.11t/data=!3m8!1e1!3m6!1sAF1QipNHsE1rpbN4NKgqGGR_Hzz2odp-bMwQeruFFKa5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNHsE1rpbN4NKgqGGR_Hzz2odp-bMwQeruFFKa5%3Dw203-h100-k-no-pi0-ya340-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332514772!6m8!1m7!1sCAoSLEFGMVFpcE5Ic0UxcnBiTjROS2dxR0dSX0h6ejJvZHAtYk13UWVydUZGS2E1!2m2!1d47.06758288466445!2d12.77526967227459!3f245.99!4f-6.890000000000001!5f0.7820865974627469'
      },
      {
        title: 'Belarus',
        link: 'https://www.google.com/maps/place/Muzey+Istorii+Teatral\'noy+I+Muzykal\'noy+Kul\'tury/@53.9054798,27.5601444,3a,90y,49.35h,96.51t/data=!3m6!1e1!3m4!1ss88rdBq5UiYKvp6ojwA7_Q!2e0!7i13312!8i6656!4m17!1m9!3m8!1s0x46da2584e2ad4881:0xa1d181ec8c10!2sBelarus!3b1!8m2!3d53.709807!4d27.953389!10e5!16zL20vMDE2M3Y!3m6!1s0x46dbcfeab3ddf76b:0x4102441cff9e1bc1!8m2!3d53.9051914!4d27.5595092!10e5!16s%2Fg%2F1hc54q1j2?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332520258!6m8!1m7!1ss88rdBq5UiYKvp6ojwA7_Q!2m2!1d53.90547982613528!2d27.56014437433606!3f49.35!4f6.510000000000005!5f0.4000000000000002'
      },
      {
        title: 'Belgium',
        link: 'https://www.google.com/maps/@51.2180796,4.4150183,3a,75y,286.45h,100.66t/data=!3m6!1e1!3m4!1srkFY-BkTJ0-2z2hWjwMHLg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332523961!6m8!1m7!1srkFY-BkTJ0-2z2hWjwMHLg!2m2!1d51.21807961391364!2d4.41501826373772!3f286.45!4f10.659999999999997!5f0.7820865974627469'
      },
      {
        title: 'Brazil',
        link: 'https://www.google.com/maps/@-6.3322239,-51.4817257,3a,90y,341.27h,94.91t/data=!3m8!1e1!3m6!1sAF1QipPuzSjWblTcoPd521LWO71ZZQ80iHIbOFme-v0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPuzSjWblTcoPd521LWO71ZZQ80iHIbOFme-v0%3Dw203-h100-k-no-pi-0-ya220-ro0-fo100!7i4096!8i2048?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332535168!6m8!1m7!1sCAoSK0FGMVFpcFB1elNqV2JsVGNvUGQ1MjFMV083MVpaUTgwaUhJYk9GbWUtdjA.!2m2!1d-6.3322239!2d-51.4817257!3f341.27!4f4.909999999999997!5f0.4000000000000002'
      },
      {
        title: 'Bulgaria',
        link: 'https://www.google.com/maps/@42.1494591,24.7477184,3a,90y,296.84h,97.19t/data=!3m7!1e1!3m5!1sncjaflFhux3cCQ9oVdgzTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DncjaflFhux3cCQ9oVdgzTg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D359.54242%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332538942!6m8!1m7!1sncjaflFhux3cCQ9oVdgzTg!2m2!1d42.14945905626361!2d24.74771841789687!3f296.84!4f7.189999999999998!5f0.4000000000000002'
      },
      {
        title: 'Cambodia',
        link: 'https://www.google.com/maps/@11.5566079,104.9353968,3a,90y,258.58h,101.78t/data=!3m8!1e1!3m6!1sAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMzT_CJp2TIuk4O2ke9ghUioKfm7ccGBuSJk7ub%3Dw203-h100-k-no-pi-0-ya152.46721-ro-0-fo100!7i6080!8i3040?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332542719!6m8!1m7!1sCAoSLEFGMVFpcE16VF9DSnAyVEl1azRPMmtlOWdoVWlvS2ZtN2NjR0J1U0prN3Vi!2m2!1d11.5566079!2d104.9353968!3f258.58!4f11.780000000000001!5f0.4000000000000002'
      },
      {
        title: 'Canada',
        link: 'https://www.google.com/maps/@60.1872492,-134.6889013,3a,75y,125.82h,79.67t/data=!3m8!1e1!3m6!1sAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNvWQOsqWlXPBfQjb3nZyw7BLWeyWUgKrSA8DIl%3Dw203-h100-k-no-pi-0.112540185-ya59.915157-ro-0-fo100!7i13970!8i6985?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332551821!6m8!1m7!1sCAoSLEFGMVFpcE52V1FPc3FXbFhQQmZRamIzblp5dzdCTFdleVdVZ0tyU0E4REls!2m2!1d60.18724916!2d-134.6889013!3f125.82!4f-10.329999999999998!5f0.7820865974627469'
      },
      {
        title: 'Chile',
        link: 'https://www.google.com/maps/@-42.3318332,-73.3751597,2a,75y,350.28h,110.42t/data=!3m6!1e1!3m4!1sqIYR4B95XigAAAQpm86PUg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332554989!6m8!1m7!1sqIYR4B95XigAAAQpm86PUg!2m2!1d-42.33183318859179!2d-73.37515973422785!3f350.28!4f20.42!5f0.7820865974627469'
      },
      {
        title: 'China',
        link: 'https://www.google.com/maps/@30.0525992,121.5109969,3a,90y,6.86h,88.32t/data=!3m8!1e1!3m6!1sAF1QipPpF8NziUhWorpn8SlciBzekKQsf1kz881zYQki!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPpF8NziUhWorpn8SlciBzekKQsf1kz881zYQki%3Dw203-h100-k-no-pi-20-ya304-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332558536!6m8!1m7!1sCAoSLEFGMVFpcFBwRjhOemlVaFdvcnBuOFNsY2lCemVrS1FzZjFrejg4MXpZUWtp!2m2!1d30.0525992!2d121.5109969!3f6.86!4f-1.6800000000000068!5f0.4000000000000002'
      },
      {
        title: 'Colombia',
        link: 'https://www.google.com/maps/@4.5985391,-74.0681066,3a,75y,280.78h,87.12t/data=!3m7!1e1!3m5!1sZbG88ECu5M1YVxcm7pp78A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DZbG88ECu5M1YVxcm7pp78A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D343.3648%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332561586!6m8!1m7!1sZbG88ECu5M1YVxcm7pp78A!2m2!1d4.598539130476504!2d-74.06810659286658!3f280.78!4f-2.8799999999999955!5f0.7820865974627469'
      },
      {
        title: 'Croatia',
        link: 'https://www.google.com/maps/@45.0819259,13.6347638,3a,90y,95.03h,90.52t/data=!3m8!1e1!3m6!1sAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOg1gfcv3mZuo3c1EL38zFiBOosvH7a-Luk2tni%3Dw203-h100-k-no-pi-0-ya47.37348-ro-0-fo100!7i7500!8i3750?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332568377!6m8!1m7!1sCAoSLEFGMVFpcE9nMWdmY3YzbVp1bzNjMUVMMzh6RmlCT29zdkg3YS1MdWsydG5p!2m2!1d45.08192591163372!2d13.63476375882529!3f95.03!4f0.519999999999996!5f0.4000000000000002'
      },
      {
        title: 'Denmark',
        link: 'https://www.google.com/maps/@56.6525516,8.5262593,3a,75y,69.18h,93.33t/data=!3m6!1e1!3m4!1sJo2m04ymc8xFmGFYNH2Tyw!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332575021!6m8!1m7!1sJo2m04ymc8xFmGFYNH2Tyw!2m2!1d56.65255161375055!2d8.52625930536295!3f69.18!4f3.3299999999999983!5f0.7820865974627469'
      },
      {
        title: 'El Salvador',
        link: 'https://www.google.com/maps/@13.3166881,-87.764475,3a,75y,313.25h,90.97t/data=!3m8!1e1!3m6!1sAF1QipODiqBlaoA8KvKv53Jf9DUfPazARV9CPfbWtgbK!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODiqBlaoA8KvKv53Jf9DUfPazARV9CPfbWtgbK%3Dw203-h100-k-no-pi-10-ya20-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332589227!6m8!1m7!1sCAoSLEFGMVFpcE9EaXFCbGFvQThLdkt2NTNKZjlEVWZQYXpBUlY5Q1BmYld0Z2JL!2m2!1d13.3166881!2d-87.76447499999999!3f313.25!4f0.9699999999999989!5f0.7820865974627469'
      },
      {
        title: 'Estonia',
        link: 'https://www.google.com/maps/@58.5323683,25.2541517,3a,75y,209.83h,83.08t/data=!3m8!1e1!3m6!1sAF1QipPLSfa0p0ALRicB8oqZOuZNZGL1CV3H3f5mcNxZ!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPLSfa0p0ALRicB8oqZOuZNZGL1CV3H3f5mcNxZ%3Dw203-h100-k-no-pi0-ya229.30869-ro0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332592322!6m8!1m7!1sCAoSLEFGMVFpcFBMU2ZhMHAwQUxSaWNCOG9xWk91Wk5aR0wxQ1YzSDNmNW1jTnha!2m2!1d58.53236829999999!2d25.2541517!3f209.83!4f-6.920000000000002!5f0.7820865974627469'
      },
      {
        title: 'Finland',
        link: 'https://www.google.com/maps/@60.1378835,24.990532,3a,75y,265.93h,93.25t/data=!3m8!1e1!3m6!1sAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNjv6f1smybA4dP0uRoIyw_GIbnReVkALNVG3I%3Dw203-h100-k-no-pi-0-ya131.89162-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332601363!6m8!1m7!1sCAoSK0FGMVFpcE5qdjZmMXNteWJBNGRQMHVSb0l5d19HSWJuUmVWa0FMTlZHM0k.!2m2!1d60.1378835301528!2d24.99053198844194!3f265.93!4f3.25!5f0.7820865974627469'
      },
      {
        title: 'Georgia',
        link: 'https://www.google.com/maps/@41.673687,44.7001648,3a,90y,273.65h,94.23t/data=!3m8!1e1!3m6!1sAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP7zxCvlgC4OSmyogVOtTIcpywfxMb1SEJ_u5AI%3Dw203-h100-k-no-pi-0-ya181-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332608703!6m8!1m7!1sCAoSLEFGMVFpcFA3enhDdmxnQzRPU215b2dWT3RUSWNweXdmeE1iMVNFSl91NUFJ!2m2!1d41.673687!2d44.7001648!3f273.65!4f4.230000000000004!5f0.4000000000000002'
      },
      {
        title: 'Germany',
        link: 'https://www.google.com/maps/@47.737947,7.6892312,3a,75y,226.36h,109.5t/data=!3m8!1e1!3m6!1sAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMPKawADsqR1qnoUutccjsFqV5458Fo6pNZQl0%3Dw203-h100-k-no-pi-0-ya324.57867-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332611797!6m8!1m7!1sCAoSK0FGMVFpcE1QS2F3QURzcVIxcW5vVXV0Y2Nqc0ZxVjU0NThGbzZwTlpRbDA.!2m2!1d47.737947!2d7.689231200000001!3f226.36!4f19.5!5f0.7820865974627469'
      },
      {
        title: 'Hungary',
        link: 'https://www.google.com/maps/@47.1917777,18.4107785,3a,90y,230.2h,79.11t/data=!3m8!1e1!3m6!1sAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPv-pCjLbZrWV1hu0oP69sTqvgV9pTZqjtV48tj%3Dw203-h100-k-no-pi-0-ya103.78106-ro-0-fo100!7i9000!8i4500?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332628469!6m8!1m7!1sCAoSLEFGMVFpcFB2LXBDakxiWnJXVjFodTBvUDY5c1RxdmdWOXBUWnFqdFY0OHRq!2m2!1d47.19177768270664!2d18.4107785381816!3f230.2!4f-10.89!5f0.4000000000000002'
      },
      {
        title: 'Iceland',
        link: 'https://www.google.com/maps/@64.7826033,-21.5608493,3a,75y,65.64h,91.3t/data=!3m8!1e1!3m6!1sAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO1f6D2pcMk2a5EoVY_3DZGkxUclie2vhCA6SEt%3Dw203-h100-k-no-pi-5.0643086-ya304.05145-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332631583!6m8!1m7!1sCAoSLEFGMVFpcE8xZjZEMnBjTWsyYTVFb1ZZXzNEWkdreFVjbGllMnZoQ0E2U0V0!2m2!1d64.78260329999999!2d-21.5608493!3f65.64!4f1.2999999999999972!5f0.7820865974627469'
      },
      {
        title: 'Indonesia',
        link: 'https://www.google.com/maps/@-3.8433943,122.0486517,3a,90y,290.41h,80.33t/data=!3m6!1e1!3m4!1svvtoiual62rn1U6c2NvRnQ!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332634720!6m8!1m7!1svvtoiual62rn1U6c2NvRnQ!2m2!1d-3.843394332539138!2d122.0486517430776!3f290.41!4f-9.670000000000002!5f0.4000000000000002'
      },
      {
        title: 'Israel',
        link: 'https://www.google.com/maps/@32.056203,34.750012,3a,75y,138.82h,83.17t/data=!3m8!1e1!3m6!1sAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXWMsEgekhu28ctRhoPtxtV_3dXbRjJ-ADf-r1%3Dw203-h100-k-no-pi-0-ya20.689228-ro-0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332638968!6m8!1m7!1sCAoSLEFGMVFpcE1YV01zRWdla2h1MjhjdFJob1B0eHRWXzNkWGJSakotQURmLXIx!2m2!1d32.056203!2d34.750012!3f138.82!4f-6.829999999999998!5f0.7820865974627469'
      },
      {
        title: 'Japan',
        link: 'https://www.google.com/maps/@36.9026466,138.1437857,3a,90y,79.75h,70.67t/data=!3m8!1e1!3m6!1sAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM44e6BIfnxByujTufJIHJaB7S-Uuy26YRF5bHx%3Dw203-h100-k-no-pi-0.112540185-ya359.88745-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332645455!6m8!1m7!1sCAoSLEFGMVFpcE00NGU2QklmbnhCeXVqVHVmSklISmFCN1MtVXV5MjZZUkY1Ykh4!2m2!1d36.9026466!2d138.1437857!3f79.75!4f-19.33!5f0.4000000000000002'
      },
      {
        title: 'Kenya',
        link: 'https://www.google.com/maps/@-3.9941269,39.6959344,3a,75y,165.56h,89.86t/data=!3m6!1e1!3m4!1s5U9Rh5BRuFrCA5dOBChIJQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332651820!6m8!1m7!1s5U9Rh5BRuFrCA5dOBChIJQ!2m2!1d-3.994126918268447!2d39.69593443016079!3f165.56!4f-0.14000000000000057!5f0.7820865974627469'
      },
      {
        title: 'Kuwait',
        link: 'https://www.google.com/maps/@29.3495474,48.0892503,3a,75y,312.41h,88.53t/data=!3m8!1e1!3m6!1sAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPfgkHJK-z2dUnXwvtrOQAW0OrKaCCaNx8o1YQ2%3Dw203-h100-k-no-pi-10-ya320-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332655952!6m8!1m7!1sCAoSLEFGMVFpcFBmZ2tISkstejJkVW5Yd3Z0ck9RQVcwT3JLYUNDYU54OG8xWVEy!2m2!1d29.3495474!2d48.0892503!3f312.41!4f-1.4699999999999989!5f0.7820865974627469'
      },
      {
        title: 'Liberia',
        link: 'https://www.google.com/maps/@6.3172542,-10.8066699,3a,90y,50.26h,96.11t/data=!3m7!1e1!3m5!1sAF1QipOPpDjxiVsIlqxYoQ_CrtotKJkhfbZOfbyJStR9!2e10!3e11!7i7680!8i3840?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332662148!6m8!1m7!1sCAoSLEFGMVFpcE9QcERqeGlWc0lscXhZb1FfQ3J0b3RLSmtoZmJaT2ZieUpTdFI5!2m2!1d6.317254223164158!2d-10.80666989120235!3f50.26!4f6.109999999999999!5f0.4000000000000002'
      },
      {
        title: 'Madagascar',
        link: 'https://www.google.com/maps/@-18.9234437,47.5319465,2a,75y,72.19h,100.77t/data=!3m7!1e1!3m5!1sYohII4q3A6QYAaDyJI_-KQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DYohII4q3A6QYAaDyJI_-KQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D279.88742%26pitch%3D-20.11257%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332669517!6m8!1m7!1sYohII4q3A6QYAaDyJI_-KQ!2m2!1d-18.92344366752726!2d47.53194652035273!3f72.19!4f10.769999999999996!5f0.7820865974627469'
      },
      {
        title: 'Nepal',
        link: 'https://www.google.com/maps/@28.7616414,83.6368122,3a,90y,147.07h,91.39t/data=!3m8!1e1!3m6!1sAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNV1GayRarrJR3VIg_FQUFVNI-d0b-nrwhhpK_U%3Dw203-h100-k-no-pi-0-ya56.000004-ro-0-fo100!7i10240!8i5120?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332693221!6m8!1m7!1sCAoSLEFGMVFpcE5WMUdheVJhcnJKUjNWSWdfRlFVRlZOSS1kMGItbnJ3aGhwS19V!2m2!1d28.76164139999999!2d83.6368122!3f147.07!4f1.3900000000000006!5f0.4000000000000002'
      },
      {
        title: 'New Zealand',
        link: 'https://www.google.com/maps/@-37.8717785,175.6828837,3a,75y,142h,87.82t/data=!3m6!1e1!3m4!1sZafOzmzIQnx7u7CnD0dMkg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332696468!6m8!1m7!1sZafOzmzIQnx7u7CnD0dMkg!2m2!1d-37.87177853802388!2d175.682883726137!3f142!4f-2.180000000000007!5f0.7820865974627469'
      },
      {
        title: 'Norway',
        link: 'https://www.google.com/maps/@58.721475,9.235935,3a,75y,184.68h,81.84t/data=!3m6!1e1!3m4!1sflanBzb_7quSGyG9vP9DmA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332700135!6m8!1m7!1sflanBzb_7quSGyG9vP9DmA!2m2!1d58.72147503485372!2d9.235934985588043!3f184.68!4f-8.159999999999997!5f0.7820865974627469'
      },
      {
        title: 'Peru',
        link: 'https://www.google.com/maps/@-13.3299509,-72.1971049,3a,90y,136.39h,84.52t/data=!3m8!1e1!3m6!1sAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNG62Q7pKXw4-wX4xblhRYXjcNp8tT9ytv2a0wL%3Dw203-h100-k-no-pi0-ya1.3773088-ro-0-fo100!7i6656!8i3328?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332707150!6m8!1m7!1sCAoSLEFGMVFpcE5HNjJRN3BLWHc0LXdYNHhibGhSWVhqY05wOHRUOXl0djJhMHdM!2m2!1d-13.3299509!2d-72.1971049!3f136.39!4f-5.480000000000004!5f0.4000000000000002'
      },
      {
        title: 'Philippines',
        link: 'https://www.google.com/maps/@14.6296075,121.0964071,3a,90y,152.33h,94.9t/data=!3m6!1e1!3m4!1shDbmXwkTQv1NYH36K6Vr2A!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332710402!6m8!1m7!1shDbmXwkTQv1NYH36K6Vr2A!2m2!1d14.62960745037837!2d121.0964071307574!3f152.33!4f4.900000000000006!5f0.4000000000000002'
      },
      {
        title: 'Portugal',
        link: 'https://www.google.com/maps/@38.709765,-9.1335375,3a,90y,46.68h,103.28t/data=!3m7!1e1!3m5!1sSZ1ENOyWibCarEvBdMM_lg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSZ1ENOyWibCarEvBdMM_lg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D66.14479%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332713772!6m8!1m7!1sSZ1ENOyWibCarEvBdMM_lg!2m2!1d38.70976500817227!2d-9.133537484566608!3f46.68!4f13.280000000000001!5f0.4000000000000002'
      },
      {
        title: 'Qatar',
        link: 'https://www.google.com/maps/@25.0897073,51.1817779,3a,75y,266.9h,83.94t/data=!3m6!1e1!3m4!1sAF1QipMuXw-X3lbcsEsy-Hzo8GeD29KUghSfjCtb2LSz!2e10!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332716861!6m8!1m7!1sCAoSLEFGMVFpcE11WHctWDNsYmNzRXN5LUh6bzhHZUQyOUtVZ2hTZmpDdGIyTFN6!2m2!1d25.08970734225568!2d51.18177794201669!3f266.9!4f-6.060000000000002!5f0.7820865974627469'
      },
      {
        title: 'Romania',
        link: 'https://www.google.com/maps/@44.4268929,26.1029659,3a,90y,242.94h,79.39t/data=!3m7!1e1!3m5!1sV8CqZprZitaQJynaUAjEAw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DV8CqZprZitaQJynaUAjEAw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D232.60112%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332719970!6m8!1m7!1sV8CqZprZitaQJynaUAjEAw!2m2!1d44.42689291919224!2d26.10296593559447!3f242.94!4f-10.61!5f0.4000000000000002'
      },
      {
        title: 'Russia',
        link: 'https://www.google.com/maps/@55.7317335,37.50607,3a,90y,268.32h,109.04t/data=!3m8!1e1!3m6!1sAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPF0nkb1BphX6nNlCFBbGPGGQpV2e0b0R1qAPAS%3Dw203-h100-k-no-pi-7.990353-ya159.14302-ro0-fo100!7i6000!8i3000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332723639!6m8!1m7!1sCAoSLEFGMVFpcFBGMG5rYjFCcGhYNm5ObENGQmJHUEdHUXBWMmUwYjBSMXFBUEFT!2m2!1d55.73173347549965!2d37.50606995075941!3f268.32!4f19.040000000000006!5f0.4000000000000002'
      },
      {
        title: 'Slovenia',
        link: 'https://www.google.com/maps/@46.5602916,15.6494557,3a,90y,120.87h,108.58t/data=!3m6!1e1!3m4!1ssNFPSsrlsNTIDAcHLasCIw!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332731147!6m8!1m7!1ssNFPSsrlsNTIDAcHLasCIw!2m2!1d46.56029155259352!2d15.64945569779819!3f120.87!4f18.58!5f0.4000000000000002'
      },
      {
        title: 'Venezuela',
        link: 'https://www.google.com/maps/@10.5132439,-66.9125697,3a,90y,172.89h,96.27t/data=!3m6!1e1!3m4!1sAF1QipMbqPPfLC_S0tN8EfzjYT7E1MZx__mHgL_4g4XM!2e10!7i8000!8i4000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1686332761420!6m8!1m7!1sCAoSLEFGMVFpcE1icVBQZkxDX1MwdE44RWZ6allUN0UxTVp4X19tSGdMXzRnNFhN!2m2!1d10.5132439351186!2d-66.9125697389245!3f172.89!4f6.269999999999996!5f0.4000000000000002'
      },
      {
        title: 'Albania',
        link: 'https://www.google.com/maps/@41.7848555,19.6466145,3a,75y,349.04h,83.42t/data=!3m8!1e1!3m6!1sAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNinVjWOad3Rxb7XNBtV-RuosgnwYaI24bVQgn1%3Dw203-h100-k-no-pi-0-ya291.11536-ro0-fo100!7i12000!8i6000?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119136328!6m8!1m7!1sCAoSLEFGMVFpcE5pblZqV09hZDNSeGI3WE5CdFYtUnVvc2dud1lhSTI0YlZRZ24x!2m2!1d41.784855531691!2d19.646614490124!3f349.04!4f-6.579999999999998!5f0.7820865974627469'
      },
      {
        title: 'Australia',
        link: 'https://www.google.com/maps/@-23.6628771,133.8225821,3a,90y,237.77h,83.78t/data=!3m8!1e1!3m6!1sAF1QipOiLDVehGHGqBbzSkkbuknyY7UgOEsNI9IQTstN!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOiLDVehGHGqBbzSkkbuknyY7UgOEsNI9IQTstN%3Dw203-h100-k-no-pi-0-ya123-ro-0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119146820!6m8!1m7!1sCAoSLEFGMVFpcE9pTERWZWhHSEdxQmJ6U2trYnVrbnlZN1VnT0VzTkk5SVFUc3RO!2m2!1d-23.6628771!2d133.8225821!3f237.77!4f-6.219999999999999!5f0.4000000000000002'
      },
      {
        title: 'Belgium',
        link: 'https://www.google.com/maps/@51.2089881,2.8846616,3a,75y,77.68h,86.15t/data=!3m7!1e1!3m5!1sjT026m8Nhnp7aQIXqudXeQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DjT026m8Nhnp7aQIXqudXeQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D335.1454%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119150490!6m8!1m7!1sjT026m8Nhnp7aQIXqudXeQ!2m2!1d51.20898806548806!2d2.884661580230813!3f77.68!4f-3.8499999999999943!5f0.7820865974627469'
      },
      {
        title: 'Botswana',
        link: 'https://www.google.com/maps/@-20.5000325,25.1290002,3a,75y,252.33h,85.04t/data=!3m8!1e1!3m6!1sAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMDuc5f1dsCAzL9Cq4ESTWWjJCRmiztQydJ4_cq%3Dw203-h100-k-no-pi-0.37066647-ya234.55408-ro-0.0015957364-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119154762!6m8!1m7!1sCAoSLEFGMVFpcE1EdWM1ZjFkc0NBekw5Q3E0RVNUV1dqSkNSbWl6dFF5ZEo0X2Nx!2m2!1d-20.5000325!2d25.1290002!3f252.33!4f-4.959999999999994!5f0.7820865974627469'
      },
      {
        title: 'Brazil',
        link: 'https://www.google.com/maps/@-0.6806566,-50.9875341,3a,90y,116.76h,88.38t/data=!3m8!1e1!3m6!1sAF1QipOsZSpaZY1uoi0ESN1qBr59c0AmsDULNnj6PQON!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOsZSpaZY1uoi0ESN1qBr59c0AmsDULNnj6PQON%3Dw203-h100-k-no-pi0-ya348-ro-0-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119159032!6m8!1m7!1sCAoSLEFGMVFpcE9zWlNwYVpZMXVvaTBFU04xcUJyNTljMEFtc0RVTE5uajZQUU9O!2m2!1d-0.6806566!2d-50.9875341!3f116.76!4f-1.6200000000000045!5f0.4000000000000002'
      },
      {
        title: 'Colombia',
        link: 'https://www.google.com/maps/@3.8597977,-76.5402389,3a,89.6y,268.63h,93.31t/data=!3m7!1e1!3m5!1s0owHJBDb2iocP6zfIwfe4w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0owHJBDb2iocP6zfIwfe4w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D321.72473%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119182731!6m8!1m7!1s0owHJBDb2iocP6zfIwfe4w!2m2!1d3.859797749837747!2d-76.5402388588541!3f268.63!4f3.3100000000000023!5f0.41007199324273763'
      },
      {
        title: 'Croatia',
        link: 'https://www.google.com/maps/@45.0818662,13.6344663,3a,75y,28.73h,90.79t/data=!3m8!1e1!3m6!1sAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNxu5Kc6xxdunr1xW0Sq-mKCDb927to-swDSb4q%3Dw203-h100-k-no-pi1.7888254-ya287.53204-ro-0.705416-fo100!7i7680!8i3840?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119196042!6m8!1m7!1sCAoSLEFGMVFpcE54dTVLYzZ4eGR1bnIxeFcwU3EtbUtDRGI5Mjd0by1zd0RTYjRx!2m2!1d45.08186619968883!2d13.63446634306079!3f28.73!4f0.7900000000000063!5f0.7820865974627469'
      },
      {
        title: 'El Salvador',
        link: 'https://www.google.com/maps/@13.7090322,-89.2134698,3a,75y,62.38h,80.54t/data=!3m8!1e1!3m6!1sAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPp_ORnqpZzWAs3pPtyYyFMUotw5eLwXYqV9FhI%3Dw203-h100-k-no-pi-2.920129-ya157.55408-ro1.6578418-fo100!7i8192!8i4096?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119216166!6m8!1m7!1sCAoSLEFGMVFpcFBwX09SbnFwWnpXQXMzcFB0eVl5Rk1Vb3R3NWVMd1hZcVY5RmhJ!2m2!1d13.70903218817429!2d-89.21346977598941!3f62.38!4f-9.459999999999994!5f0.7820865974627469'
      },
      {
        title: 'Germany',
        link: 'https://www.google.com/maps/@47.9951764,7.8529328,3a,74.5y,326.02h,114.9t/data=!3m8!1e1!3m6!1sAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM7l-6U8Z7w57_nCeqbllh1hShZ1Tb7KatMH1OH%3Dw203-h100-k-no-pi-17.10611-ya346.90536-ro-0-fo100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119232778!6m8!1m7!1sCAoSLEFGMVFpcE03bC02VThaN3c1N19uQ2VxYmxsaDFoU2haMVRiN0thdE1IMU9I!2m2!1d47.99517639017938!2d7.852932849698391!3f326.02!4f24.900000000000006!5f0.7951360383703611'
      },
      {
        title: 'Ghana',
        link: 'https://www.google.com/maps/@6.6957825,-1.6165838,3a,90y,257.8h,81.84t/data=!3m7!1e1!3m5!1ss2jaeN-KjhsrQLbcMiGrpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Ds2jaeN-KjhsrQLbcMiGrpQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D326.98788%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119235842!6m8!1m7!1ss2jaeN-KjhsrQLbcMiGrpQ!2m2!1d6.695782542655994!2d-1.616583768625464!3f257.8!4f-8.159999999999997!5f0.4000000000000002'
      },
      {
        title: 'India',
        link: 'https://www.google.com/maps/@26.923828,75.8270749,3a,75y,285.54h,105.75t/data=!3m6!1e1!3m4!1s1Axyv3l_iqt9yWzC4gIdqg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119247070!6m8!1m7!1s1Axyv3l_iqt9yWzC4gIdqg!2m2!1d26.9238280486489!2d75.82707492149625!3f285.54!4f15.75!5f0.7820865974627469'
      },
      {
        title: 'Indonesia',
        link: 'https://www.google.com/maps/@-3.0825232,119.9169088,3a,75y,228.56h,98.57t/data=!3m6!1e1!3m4!1s26jryH9JuOBs4IO9Y1QmOw!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119250014!6m8!1m7!1s26jryH9JuOBs4IO9Y1QmOw!2m2!1d-3.082523173064316!2d119.9169088254661!3f228.56!4f8.569999999999993!5f0.7820865974627469'
      },
      {
        title: 'Iran',
        link: 'https://www.google.com/maps/@30.4325525,56.057296,3a,75y,151.04h,95.09t/data=!3m8!1e1!3m6!1sAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO3JLTtHCK62IXs7Ja_EfxD9wlU_Ge8jPPKMCZW%3Dw203-h100-k-no-pi-10-ya189.07047-ro-0-fo100!7i5940!8i2970?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119253733!6m8!1m7!1sCAoSLEFGMVFpcE8zSkxUdEhDSzYySVhzN0phX0VmeEQ5d2xVX0dlOGpQUEtNQ1pX!2m2!1d30.43255247853044!2d56.05729599476224!3f151.04!4f5.090000000000003!5f0.7820865974627469'
      },
      {
        title: 'Italy',
        link: 'https://www.google.com/maps/@41.8982242,12.4731588,3a,90y,175.69h,83.45t/data=!3m8!1e1!3m6!1sAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPaNur2R3fJWzM5XCDlEPK7i9CQ7asIMgjjJO6L%3Dw203-h100-k-no-pi-0-ya248.70602-ro-0-fo100!7i6528!8i3264?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119265815!6m8!1m7!1sCAoSLEFGMVFpcFBhTnVyMlIzZkpXek01WENEbEVQSzdpOUNRN2FzSU1nampKTzZM!2m2!1d41.898224225052!2d12.47315876255!3f175.69!4f-6.549999999999997!5f0.4000000000000002'
      },
      {
        title: 'Japan',
        link: 'https://www.google.com/maps/@36.7326326,138.4621769,2a,75y,132.59h,75.21t/data=!3m7!1e1!3m5!1s-_0l0tU3lKz0JtaEsqJk7w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-_0l0tU3lKz0JtaEsqJk7w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D294.00262%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119273227!6m8!1m7!1s-_0l0tU3lKz0JtaEsqJk7w!2m2!1d36.732632613848!2d138.4621769294279!3f132.59!4f-14.790000000000006!5f0.7820865974627469'
      },
      {
        title: 'Jordan',
        link: 'https://www.google.com/maps/@31.9516112,35.9393884,2a,75y,308.12h,83.76t/data=!3m7!1e1!3m5!1siUBbBTb3yDoFEFhUe4GnCg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DiUBbBTb3yDoFEFhUe4GnCg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D126.0864%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119276293!6m8!1m7!1siUBbBTb3yDoFEFhUe4GnCg!2m2!1d31.95161115368211!2d35.93938839552868!3f308.12!4f-6.239999999999995!5f0.7820865974627469'
      },
      {
        title: 'Kenya',
        link: 'https://www.google.com/maps/@-1.2839794,36.8208278,3a,90y,336.57h,88.24t/data=!3m6!1e1!3m4!1sGwPdUdRZdv9AXcFndU_EOQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119279399!6m8!1m7!1sGwPdUdRZdv9AXcFndU_EOQ!2m2!1d-1.283979405927672!2d36.82082780827069!3f336.57!4f-1.7600000000000051!5f0.4000000000000002'
      },
      {
        title: 'Latvia',
        link: 'https://www.google.com/maps/@56.9474378,24.1063499,3a,90y,91.94h,96.81t/data=!3m6!1e1!3m4!1s-36m3Um4REUCCCjuzfjYaA!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119286097!6m8!1m7!1s-36m3Um4REUCCCjuzfjYaA!2m2!1d56.9474378136615!2d24.10634993779821!3f91.94!4f6.810000000000002!5f0.4000000000000002'
      },
      {
        title: 'Lithuania',
        link: 'https://www.google.com/maps/@55.798336,21.0670862,3a,75y,334.07h,87.38t/data=!3m8!1e1!3m6!1sAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNSDdBQRgxfsZ-7vVIbXh7OvjiZldscjXjuxsII%3Dw203-h100-k-no-pi-0-ya9.096276-ro-0-fo100!7i9204!8i4602?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119299805!6m8!1m7!1sCAoSLEFGMVFpcE5TRGRCUVJneGZzWi03dlZJYlhoN092amlabGRzY2pYanV4c0lJ!2m2!1d55.79833599951167!2d21.06708616018295!3f334.07!4f-2.6200000000000045!5f0.7820865974627469'
      },
      {
        title: 'Malaysia',
        link: 'https://www.google.com/maps/@3.2375917,101.684043,3a,90y,7.13h,116.58t/data=!3m8!1e1!3m6!1sAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNCtfgdaFJRxi3C4YPLoBPdwp3ba8gYPG_UHoHd%3Dw203-h100-k-no-pi-0-ya290.8275-ro0-fo100!7i8704!8i4352?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119309719!6m8!1m7!1sCAoSLEFGMVFpcE5DdGZnZGFGSlJ4aTNDNFlQTG9CUGR3cDNiYThnWVBHX1VIb0hk!2m2!1d3.2375917!2d101.684043!3f7.13!4f26.58!5f0.4000000000000002'
      },
      {
        title: 'Netherlands',
        link: 'https://www.google.com/maps/@52.113111,4.2802872,3a,90y,199.78h,96.26t/data=!3m6!1e1!3m4!1sj1uAVlzaTU4GQyduJYzjuA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119343452!6m8!1m7!1sj1uAVlzaTU4GQyduJYzjuA!2m2!1d52.11311104606541!2d4.28028724851124!3f199.78!4f6.260000000000005!5f0.4000000000000002'
      },
      {
        title: 'New Zealand',
        link: 'https://www.google.com/maps/@-39.5010522,176.9184996,3a,90y,68.64h,88.81t/data=!3m6!1e1!3m4!1sJCSiYBxjbDe_EPTZw_7gDQ!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119346564!6m8!1m7!1sJCSiYBxjbDe_EPTZw_7gDQ!2m2!1d-39.5010521533879!2d176.918499552169!3f68.64!4f-1.1899999999999977!5f0.4000000000000002'
      },
      {
        title: 'Nigeria',
        link: 'https://www.google.com/maps/@9.0809615,7.5243988,2a,90y,84.34h,85.05t/data=!3m6!1e1!3m4!1sINHBz4HdSwMAAAQrBnftjg!2e0!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119352692!6m8!1m7!1sINHBz4HdSwMAAAQrBnftjg!2m2!1d9.080961517214682!2d7.524398838108427!3f84.34!4f-4.950000000000003!5f0.4000000000000002'
      },
      {
        title: 'Poland',
        link: 'https://www.google.com/maps/@52.2494052,20.9923145,3a,90y,99.76h,104.25t/data=!3m6!1e1!3m4!1seXEScTe7gqoljTOV4M_1PA!2e0!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119378940!6m8!1m7!1seXEScTe7gqoljTOV4M_1PA!2m2!1d52.24940517758763!2d20.99231454742342!3f99.76!4f14.25!5f0.4000000000000002'
      },
      {
        title: 'Singapore',
        link: 'https://www.google.com/maps/@1.2806527,103.8642833,2a,90y,41.99h,89.35t/data=!3m7!1e1!3m5!1sb7tYegC8sOpQiSgx9CjtNA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Db7tYegC8sOpQiSgx9CjtNA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D84.62819%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119382058!6m8!1m7!1sb7tYegC8sOpQiSgx9CjtNA!2m2!1d1.280652667541553!2d103.8642833171509!3f41.99!4f-0.6500000000000057!5f0.4000000000000002'
      },
      {
        title: 'Spain',
        link: 'https://www.google.com/maps/@37.1760783,-3.5881413,3a,90y,12.6h,91.86t/data=!3m8!1e1!3m6!1sAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP9qAD3ssenWODwqFLIT6VbwAD4FzlXgKbgmht7%3Dw203-h100-k-no-pi-0-ya139.54929-ro0-fo100!7i6144!8i3072?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119386122!6m8!1m7!1sCAoSLEFGMVFpcFA5cUFEM3NzZW5XT0R3cUZMSVQ2VmJ3QUQ0RnpsWGdLYmdtaHQ3!2m2!1d37.1760783!2d-3.5881413!3f12.6!4f1.8599999999999994!5f0.4000000000000002'
      },
      {
        title: 'Sweden',
        link: 'https://www.google.com/maps/@65.8055012,21.678883,3a,90y,202.99h,90.85t/data=!3m7!1e1!3m5!1sO7gt2w-yxeZI97e82gkunQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DO7gt2w-yxeZI97e82gkunQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D194.25218%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
        embed: 'https://www.google.com/maps/embed?pb=!4v1687119389195!6m8!1m7!1sO7gt2w-yxeZI97e82gkunQ!2m2!1d65.80550118091678!2d21.67888296764118!3f202.99!4f0.8499999999999943!5f0.4000000000000002'
      }
    ],
    ie = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo',
      'Congo',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
      'Fiji',
      'Finland',
      'France',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Ivory Coast',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea North',
      'Korea South',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Qatar',
      'Romania',
      'Russia',
      'Rwanda',
      'St Lucia',
      'Samoa',
      'San Marino',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad & Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'America',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zambia',
      'Zimbabwe',
      'England',
      'United States',
      'Britain'
    ],
    pe = r(990),
    le = r.n(pe),
    ce = {
      components: {
        Rule: G
      },
      props: Object(Q.a) ({
        numErrors: {
          type: Number,
          required: !0
        },
        errorRulesIndex: {
          type: Number,
          required: !0
        },
        rulesOrder: {
          type: Array,
          required: !0
        },
        currCaptcha: {
          type: String,
          required: !0
        },
        currChessPuzzle: {
          type: Number,
          required: !0
        },
        randomColor: {
          type: String,
          required: !0
        },
        passwordStrength: {
          type: Number,
          required: !0
        },
        currYoutubeId: {
          type: String,
          required: !0
        },
        randomYoutubeDuration: {
          type: Number,
          required: !0
        },
        currPlace: {
          type: Object,
          required: !0
        },
        currPlaceGuess: {
          type: Array,
          required: !0
        },
        currChessGuess: {
          type: Array,
          required: !0
        }
      }, 'numErrors', {
        type: Number,
        required: !0
      }),
      data: function () {
        return {
          rules: F
        }
      }
    },
    de = (r(994), Object(N.a) (ce, (function () {
      var e = this,
      t = e._self._c;
      return t('TransitionGroup', {
        attrs: {
          name: 'list',
          tag: 'div',
          css: !0
        }
      }, e._l(e.rulesOrder.length, (function (i, r) {
        return t('div', {
          key: e.rules[e.rulesOrder[i - 1]].id
        }, [
          t('Rule', {
            staticClass: 'rule',
            attrs: {
              ruleNum: e.rulesOrder[i - 1] + 1,
              rule: e.rules[e.rulesOrder[i - 1]],
              hasError: i <= e.errorRulesIndex,
              captcha: e.currCaptcha,
              chessPuzzle: e.currChessPuzzle,
              randomColor: e.randomColor,
              passwordStrength: e.passwordStrength,
              randomYoutubeDuration: e.randomYoutubeDuration,
              currYoutubeId: e.currYoutubeId,
              currPlace: e.currPlace,
              currPlaceGuess: e.currPlaceGuess,
              currChessGuess: e.currChessGuess,
              numErrors: e.numErrors
            },
            on: {
              refreshColor: function (t) {
                return e.$emit('refreshColor')
              },
              captchaRefresh: function (t) {
                return e.$emit('captchaRefresh')
              },
              sacrafice: function (t) {
                return e.$emit('sacrafice', t)
              },
              done: function (t) {
                return e.$emit('done')
              }
            }
          })
        ], 1)
      })), 0)
    }), [
    ], !1, null, null, null).exports),
    ue = (r(43), r(71), r(72), r(20));
    r(361),
    r(996),
    r(214),
    r(357),
    r(147),
    r(215),
    r(50);
    function me(e, t) {
      var r = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
      if (!r) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (!e) return;
          if ('string' == typeof e) return fe(e, t);
          var r = Object.prototype.toString.call(e).slice(8, - 1);
          'Object' === r && e.constructor && (r = e.constructor.name);
          if ('Map' === r || 'Set' === r) return Array.from(e);
          if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fe(e, t)
        }(e)) || t && e && 'number' == typeof e.length) {
          r && (e = r);
          var i = 0,
          o = function () {
          };
          return {
            s: o,
            n: function () {
              return i >= e.length ? {
                done: !0
              }
               : {
                done: !1,
                value: e[i++]
              }
            },
            e: function (e) {
              throw e
            },
            f: o
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var n,
      l = !0,
      c = !1;
      return {
        s: function () {
          r = r.call(e)
        },
        n: function () {
          var e = r.next();
          return l = e.done,
          e
        },
        e: function (e) {
          c = !0,
          n = e
        },
        f: function () {
          try {
            l || null == r.return || r.return()
          } finally {
            if (c) throw n
          }
        }
      }
    }
    function fe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
      return r
    }
    var he = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    be = [
      '1-0',
      '0-1',
      '1/2-1/2',
      '*'
    ],
    ge = {
      b: [
        16,
        32,
        17,
        15
      ],
      w: [
        - 16,
        - 32,
        - 17,
        - 15
      ]
    },
    we = {
      n: [
        - 18,
        - 33,
        - 31,
        - 14,
        18,
        33,
        31,
        14
      ],
      b: [
        - 17,
        - 15,
        17,
        15
      ],
      r: [
        - 16,
        1,
        16,
        - 1
      ],
      q: [
        - 17,
        - 16,
        - 15,
        1,
        17,
        16,
        15,
        - 1
      ],
      k: [
        - 17,
        - 16,
        - 15,
        1,
        17,
        16,
        15,
        - 1
      ]
    },
    Pe = [
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      24,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      2,
      24,
      2,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      53,
      56,
      53,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      24,
      24,
      24,
      56,
      0,
      56,
      24,
      24,
      24,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      53,
      56,
      53,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      2,
      24,
      2,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      24,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      20
    ],
    ve = [
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      16,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      16,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      16,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      - 15,
      - 16,
      - 17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      - 15,
      0,
      - 16,
      0,
      - 17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      - 15,
      0,
      0,
      - 16,
      0,
      0,
      - 17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      - 15,
      0,
      0,
      0,
      - 16,
      0,
      0,
      0,
      - 17,
      0,
      0,
      0,
      0,
      0,
      0,
      - 15,
      0,
      0,
      0,
      0,
      - 16,
      0,
      0,
      0,
      0,
      - 17,
      0,
      0,
      0,
      0,
      - 15,
      0,
      0,
      0,
      0,
      0,
      - 16,
      0,
      0,
      0,
      0,
      0,
      - 17,
      0,
      0,
      - 15,
      0,
      0,
      0,
      0,
      0,
      0,
      - 16,
      0,
      0,
      0,
      0,
      0,
      0,
      - 17
    ],
    ye = {
      p: 0,
      n: 1,
      b: 2,
      r: 3,
      q: 4,
      k: 5
    },
    ke = {
      NORMAL: 1,
      CAPTURE: 2,
      BIG_PAWN: 4,
      EP_CAPTURE: 8,
      PROMOTION: 16,
      KSIDE_CASTLE: 32,
      QSIDE_CASTLE: 64
    },
    xe = {
      a8: 0,
      b8: 1,
      c8: 2,
      d8: 3,
      e8: 4,
      f8: 5,
      g8: 6,
      h8: 7,
      a7: 16,
      b7: 17,
      c7: 18,
      d7: 19,
      e7: 20,
      f7: 21,
      g7: 22,
      h7: 23,
      a6: 32,
      b6: 33,
      c6: 34,
      d6: 35,
      e6: 36,
      f6: 37,
      g6: 38,
      h6: 39,
      a5: 48,
      b5: 49,
      c5: 50,
      d5: 51,
      e5: 52,
      f5: 53,
      g5: 54,
      h5: 55,
      a4: 64,
      b4: 65,
      c4: 66,
      d4: 67,
      e4: 68,
      f4: 69,
      g4: 70,
      h4: 71,
      a3: 80,
      b3: 81,
      c3: 82,
      d3: 83,
      e3: 84,
      f3: 85,
      g3: 86,
      h3: 87,
      a2: 96,
      b2: 97,
      c2: 98,
      d2: 99,
      e2: 100,
      f2: 101,
      g2: 102,
      h2: 103,
      a1: 112,
      b1: 113,
      c1: 114,
      d1: 115,
      e1: 116,
      f1: 117,
      g1: 118,
      h1: 119
    },
    Re = {
      w: [
        {
          square: xe.a1,
          flag: ke.QSIDE_CASTLE
        },
        {
          square: xe.h1,
          flag: ke.KSIDE_CASTLE
        }
      ],
      b: [
        {
          square: xe.a8,
          flag: ke.QSIDE_CASTLE
        },
        {
          square: xe.h8,
          flag: ke.KSIDE_CASTLE
        }
      ]
    };
    function Fe(e) {
      var t = e.charAt(0);
      if (t >= 'a' && t <= 'h') {
        if (e.match(/[a-h]\d.*[a-h]\d/)) return;
        return Oe
      }
      return 'o' === (t = t.toLowerCase()) ? Ge : t
    }
    function Qe(e) {
      return e.replace(/=/, '').replace(/[+#]?[?!]*$/, '')
    }
    function Ce(i) {
      return i >> 4
    }
    function Ne(i) {
      return 15 & i
    }
    function Ae(i) {
      var e = Ne(i),
      t = Ce(i);
      return 'abcdefgh'.substring(e, e + 1) + '87654321'.substring(t, t + 1)
    }
    function Se(e) {
      return e === Le ? Ve : Le
    }
    function Be(e) {
      var t = e instanceof Array ? [
      ] : {
      };
      for (var r in e) 'object' === Object(ue.a) (r) ? t[r] = Be(e[r]) : t[r] = e[r];
      return t
    }
    function _e(e) {
      return e.replace(/^\s+|\s+$/g, '')
    }
    var qe,
    De,
    Ke,
    Ee,
    Me,
    Ie,
    ze,
    Ve = 'b',
    Le = 'w',
    Te = - 1,
    Oe = 'p',
    je = 'b',
    Ge = 'k',
    Ye = (function () {
      for (var e = [
      ], i = xe.a8; i <= xe.h1; i++) 136 & i ? i += 7 : e.push(Ae(i))
    }(), {
      NORMAL: 'n',
      CAPTURE: 'c',
      BIG_PAWN: 'b',
      EP_CAPTURE: 'e',
      PROMOTION: 'p',
      KSIDE_CASTLE: 'k',
      QSIDE_CASTLE: 'q'
    }),
    Ue = function (e) {
      var t = new Array(128),
      r = {
        w: Te,
        b: Te
      },
      o = Le,
      n = {
        w: 0,
        b: 0
      },
      l = Te,
      c = 0,
      d = 1,
      m = [
      ],
      header = {
      },
      f = {
      };
      function h(e) {
        void 0 === e && (e = !1),
        t = new Array(128),
        r = {
          w: Te,
          b: Te
        },
        o = Le,
        n = {
          w: 0,
          b: 0
        },
        l = Te,
        c = 0,
        d = 1,
        m = [
        ],
        e || (header = {
        }),
        f = {
        },
        x(y())
      }
      function w() {
        for (var e = [
        ], t = {
        }, r = function (e) {
          e in f && (t[e] = f[e])
        }; m.length > 0; ) e.push(I());
        for (r(y()); e.length > 0; ) M(e.pop()),
        r(y());
        f = t
      }
      function P() {
        v(he)
      }
      function v(e, t) {
        void 0 === t && (t = !1);
        var r = e.split(/\s+/),
        m = r[0],
        f = 0;
        h(t);
        for (var i = 0; i < m.length; i++) {
          var w = m.charAt(i);
          if ('/' === w) f += 8;
           else if ( - 1 !== '0123456789'.indexOf(w)) f += parseInt(w, 10);
           else {
            var P = w < 'a' ? Le : Ve;
            F({
              type: w.toLowerCase(),
              color: P
            }, Ae(f)),
            f++
          }
        }
        return o = r[1],
        r[2].indexOf('K') > - 1 && (n.w |= ke.KSIDE_CASTLE),
        r[2].indexOf('Q') > - 1 && (n.w |= ke.QSIDE_CASTLE),
        r[2].indexOf('k') > - 1 && (n.b |= ke.KSIDE_CASTLE),
        r[2].indexOf('q') > - 1 && (n.b |= ke.QSIDE_CASTLE),
        l = '-' === r[3] ? Te : xe[r[3]],
        c = parseInt(r[4], 10),
        d = parseInt(r[5], 10),
        x(y()),
        !0
      }
      function y() {
        for (var e = 0, r = '', i = xe.a8; i <= xe.h1; i++) {
          if (null == t[i]) e++;
           else {
            e > 0 && (r += e, e = 0);
            var m = t[i].color,
            f = t[i].type;
            r += m === Le ? f.toUpperCase() : f.toLowerCase()
          }
          i + 1 & 136 && (e > 0 && (r += e), i !== xe.h1 && (r += '/'), e = 0, i += 8)
        }
        var h = '';
        n[Le] & ke.KSIDE_CASTLE && (h += 'K'),
        n[Le] & ke.QSIDE_CASTLE && (h += 'Q'),
        n[Ve] & ke.KSIDE_CASTLE && (h += 'k'),
        n[Ve] & ke.QSIDE_CASTLE && (h += 'q'),
        h = h || '-';
        var w = l === Te ? '-' : Ae(l);
        return [r,
        o,
        h,
        w,
        c,
        d].join(' ')
      }
      function k(e) {
        for (var i = 0; i < e.length; i += 2) 'string' == typeof e[i] && 'string' == typeof e[i + 1] && (header[e[i]] = e[i + 1]);
        return header
      }
      function x(e) {
        m.length > 0 || (e !== he ? (header.SetUp = '1', header.FEN = e) : (delete header.SetUp, delete header.FEN))
      }
      function R(e) {
        var r = t[xe[e]];
        return r ? {
          type: r.type,
          color: r.color
        }
         : null
      }
      function F(e, o) {
        if (!('type' in e) || !('color' in e)) return !1;
        if ( - 1 === 'pnbrqkPNBRQK'.indexOf(e.type.toLowerCase())) return !1;
        if (!(o in xe)) return !1;
        var n = xe[o];
        return (e.type != Ge || r[e.color] == Te || r[e.color] == n) && (t[n] = {
          type: e.type,
          color: e.color
        }, e.type === Ge && (r[e.color] = n), x(y()), !0)
      }
      function Q(e, t, r, n, l) {
        var c = {
          color: o,
          from: t,
          to: r,
          flags: n,
          piece: e[t].type
        };
        return l && (c.flags |= ke.PROMOTION, c.promotion = l),
        e[r] ? c.captured = e[r].type : n & ke.EP_CAPTURE && (c.captured = Oe),
        c
      }
      function C(e) {
        function c(e, t, r, o, n) {
          if (e[r].type !== Oe || 0 !== Ce(o) && 7 !== Ce(o)) t.push(Q(e, r, o, n));
           else for (var l = [
            'q',
            'r',
            je,
            'n'
          ], i = 0, c = l.length; i < c; i++) t.push(Q(e, r, o, n, l[i]))
        }
        var d = [
        ],
        m = o,
        f = Se(m),
        h = {
          b: 1,
          w: 6
        },
        w = xe.a8,
        P = xe.h1,
        v = !1,
        y = void 0 === e || !('legal' in e) || e.legal,
        k = void 0 === e || !('piece' in e) || 'string' != typeof e.piece || e.piece.toLowerCase();
        if (void 0 !== e && 'square' in e) {
          if (!(e.square in xe)) return [];
          w = P = xe[e.square],
          v = !0
        }
        for (var i = w; i <= P; i++) if (136 & i) i += 7;
         else {
          var x = t[i];
          if (null != x && x.color === m) if (x.type !== Oe || !0 !== k && k !== Oe) {
            if (!0 === k || k === x.type) for (var R = 0, F = we[x.type].length; R < F; R++) {
              var C = we[x.type][R];
              for (N = i; !(136 & (N += C)); ) {
                if (null != t[N]) {
                  if (t[N].color === m) break;
                  c(t, d, i, N, ke.CAPTURE);
                  break
                }
                if (c(t, d, i, N, ke.NORMAL), 'n' === x.type || 'k' === x.type) break
              }
            }
          } else {
            var N = i + ge[m][0];
            if (null == t[N]) {
              c(t, d, i, N, ke.NORMAL);
              var N = i + ge[m][1];
              h[m] === Ce(i) && null == t[N] && c(t, d, i, N, ke.BIG_PAWN)
            }
            for (R = 2; R < 4; R++) {
              136 & (N = i + ge[m][R]) || (null != t[N] && t[N].color === f ? c(t, d, i, N, ke.CAPTURE) : N === l && c(t, d, i, l, ke.EP_CAPTURE))
            }
          }
        }
        if (!(!0 !== k && k !== Ge || v && P !== r[m])) {
          if (n[m] & ke.KSIDE_CASTLE) {
            var B = (_ = r[m]) + 2;
            null != t[_ + 1] || null != t[B] || A(f, r[m]) || A(f, _ + 1) || A(f, B) || c(t, d, r[m], B, ke.KSIDE_CASTLE)
          }
          if (n[m] & ke.QSIDE_CASTLE) {
            var _;
            B = (_ = r[m]) - 2;
            null != t[_ - 1] || null != t[_ - 2] || null != t[_ - 3] || A(f, r[m]) || A(f, _ - 1) || A(f, B) || c(t, d, r[m], B, ke.QSIDE_CASTLE)
          }
        }
        if (!y) return d;
        var D = [
        ];
        for (i = 0, F = d.length; i < F; i++) M(d[i]),
        S(m) || D.push(d[i]),
        I();
        return D
      }
      function N(e, t) {
        var output = '';
        if (e.flags & ke.KSIDE_CASTLE) output = 'O-O';
         else if (e.flags & ke.QSIDE_CASTLE) output = 'O-O-O';
         else {
          if (e.piece !== Oe) {
            var r = function (e, t) {
              for (var r = e.from, o = e.to, n = e.piece, l = 0, c = 0, d = 0, i = 0, m = t.length; i < m; i++) {
                var f = t[i].from,
                h = t[i].to;
                n === t[i].piece && r !== f && o === h && (l++, Ce(r) === Ce(f) && c++, Ne(r) === Ne(f) && d++)
              }
              return l > 0 ? c > 0 && d > 0 ? Ae(r) : d > 0 ? Ae(r).charAt(1) : Ae(r).charAt(0) : ''
            }(e, t);
            output += e.piece.toUpperCase() + r
          }
          e.flags & (ke.CAPTURE | ke.EP_CAPTURE) && (e.piece === Oe && (output += Ae(e.from) [0]), output += 'x'),
          output += Ae(e.to),
          e.flags & ke.PROMOTION && (output += '=' + e.promotion.toUpperCase())
        }
        return M(e),
        B() && (_() ? output += '#' : output += '+'),
        I(),
        output
      }
      function A(e, r) {
        for (var i = xe.a8; i <= xe.h1; i++) if (136 & i) i += 7;
         else if (null != t[i] && t[i].color === e) {
          var o = t[i],
          n = i - r,
          l = n + 119;
          if (Pe[l] & 1 << ye[o.type]) {
            if (o.type === Oe) {
              if (n > 0) {
                if (o.color === Le) return !0
              } else if (o.color === Ve) return !0;
              continue
            }
            if ('n' === o.type || 'k' === o.type) return !0;
            for (var c = ve[l], d = i + c, m = !1; d !== r; ) {
              if (null != t[d]) {
                m = !0;
                break
              }
              d += c
            }
            if (!m) return !0
          }
        }
        return !1
      }
      function S(e) {
        return A(Se(e), r[e])
      }
      function B() {
        return S(o)
      }
      function _() {
        return B() && 0 === C().length
      }
      function D() {
        return !B() && 0 === C().length
      }
      function K() {
        for (var e = {
        }, r = [
        ], o = 0, n = 0, i = xe.a8; i <= xe.h1; i++) if (n = (n + 1) % 2, 136 & i) i += 7;
         else {
          var l = t[i];
          l && (e[l.type] = l.type in e ? e[l.type] + 1 : 1, l.type === je && r.push(n), o++)
        }
        if (2 === o) return !0;
        if (3 === o && (1 === e[je] || 1 === e.n)) return !0;
        if (o === e[je] + 2) {
          var c = 0,
          d = r.length;
          for (i = 0; i < d; i++) c += r[i];
          if (0 === c || c === d) return !0
        }
        return !1
      }
      function E() {
        for (var e = [
        ], t = {
        }, r = !1; ; ) {
          var o = I();
          if (!o) break;
          e.push(o)
        }
        for (; ; ) {
          var n = y().split(' ').slice(0, 4).join(' ');
          if (t[n] = n in t ? t[n] + 1 : 1, t[n] >= 3 && (r = !0), !e.length) break;
          M(e.pop())
        }
        return r
      }
      function M(e) {
        var f = o,
        h = Se(f);
        if (function (e) {
          m.push({
            move: e,
            kings: {
              b: r.b,
              w: r.w
            },
            turn: o,
            castling: {
              b: n.b,
              w: n.w
            },
            ep_square: l,
            half_moves: c,
            move_number: d
          })
        }(e), t[e.to] = t[e.from], t[e.from] = null, e.flags & ke.EP_CAPTURE && (o === Ve ? t[e.to - 16] = null : t[e.to + 16] = null), e.flags & ke.PROMOTION && (t[e.to] = {
          type: e.promotion,
          color: f
        }), t[e.to].type === Ge) {
          if (r[t[e.to].color] = e.to, e.flags & ke.KSIDE_CASTLE) {
            var w = e.to - 1,
            P = e.to + 1;
            t[w] = t[P],
            t[P] = null
          } else if (e.flags & ke.QSIDE_CASTLE) {
            w = e.to + 1,
            P = e.to - 2;
            t[w] = t[P],
            t[P] = null
          }
          n[f] = ''
        }
        if (n[f]) for (var i = 0, v = Re[f].length; i < v; i++) if (e.from === Re[f][i].square && n[f] & Re[f][i].flag) {
          n[f] ^= Re[f][i].flag;
          break
        }
        if (n[h]) for (i = 0, v = Re[h].length; i < v; i++) if (e.to === Re[h][i].square && n[h] & Re[h][i].flag) {
          n[h] ^= Re[h][i].flag;
          break
        }
        l = e.flags & ke.BIG_PAWN ? 'b' === o ? e.to - 16 : e.to + 16 : Te,
        e.piece === Oe || e.flags & (ke.CAPTURE | ke.EP_CAPTURE) ? c = 0 : c++,
        o === Ve && d++,
        o = Se(o)
      }
      function I() {
        var e = m.pop();
        if (null == e) return null;
        var f = e.move;
        r = e.kings,
        o = e.turn,
        n = e.castling,
        l = e.ep_square,
        c = e.half_moves,
        d = e.move_number;
        var h,
        w,
        P = o,
        v = Se(o);
        if (t[f.from] = t[f.to], t[f.from].type = f.piece, t[f.to] = null, f.flags & ke.CAPTURE) t[f.to] = {
          type: f.captured,
          color: v
        };
         else if (f.flags & ke.EP_CAPTURE) {
          var y;
          y = P === Ve ? f.to - 16 : f.to + 16,
          t[y] = {
            type: Oe,
            color: v
          }
        }
        f.flags & (ke.KSIDE_CASTLE | ke.QSIDE_CASTLE) && (f.flags & ke.KSIDE_CASTLE ? (h = f.to + 1, w = f.to - 1) : f.flags & ke.QSIDE_CASTLE && (h = f.to - 2, w = f.to + 1), t[h] = t[w], t[w] = null);
        return f
      }
      function z(e, t) {
        for (var r = Qe(e), o = 0; o < 2; o++) {
          if (1 == o) {
            if (!t) return null;
            var n = !1;
            if (f = r.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/)) {
              var l = f[1],
              c = f[2],
              d = f[3],
              m = f[4];
              1 == c.length && (n = !0)
            } else {
              var f;
              if (f = r.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/)) {
                l = f[1],
                c = f[2],
                d = f[3],
                m = f[4];
                if (1 == c.length) n = !0
              }
            }
          }
          for (var h = Fe(r), w = C({
            legal: !0,
            piece: l || h
          }), i = 0, P = w.length; i < P; i++) switch (o) {
            case 0:
              if (r === Qe(N(w[i], w))) return w[i];
              break;
            case 1:
              if (f) {
                if (!(l && l.toLowerCase() != w[i].piece || xe[c] != w[i].from || xe[d] != w[i].to || m && m.toLowerCase() != w[i].promotion)) return w[i];
                if (n) {
                  var v = Ae(w[i].from);
                  if (!(l && l.toLowerCase() != w[i].piece || xe[d] != w[i].to || c != v[0] && c != v[1] || m && m.toLowerCase() != w[i].promotion)) return w[i]
                }
              }
          }
        }
        return null
      }
      function V(e) {
        var t = Be(e);
        t.san = N(t, C({
          legal: !0
        })),
        t.to = Ae(t.to),
        t.from = Ae(t.from);
        var r = '';
        for (var o in ke) ke[o] & t.flags && (r += Ye[o]);
        return t.flags = r,
        t
      }
      function L(e) {
        for (var t = C({
          legal: !1
        }), r = 0, n = o, i = 0, l = t.length; i < l; i++) {
          if (M(t[i]), !S(n)) if (e - 1 > 0) r += L(e - 1);
           else r++;
          I()
        }
        return r
      }
      return v(void 0 === e ? he : e),
      {
        load: function (e) {
          return v(e)
        },
        reset: function () {
          return P()
        },
        moves: function (e) {
          for (var t = C(e), r = [
          ], i = 0, o = t.length; i < o; i++) void 0 !== e && 'verbose' in e && e.verbose ? r.push(V(t[i])) : r.push(N(t[i], C({
            legal: !0
          })));
          return r
        },
        in_check: function () {
          return B()
        },
        in_checkmate: function () {
          return _()
        },
        in_stalemate: function () {
          return D()
        },
        in_draw: function () {
          return c >= 100 || D() || K() || E()
        },
        insufficient_material: function () {
          return K()
        },
        in_threefold_repetition: function () {
          return E()
        },
        game_over: function () {
          return c >= 100 || _() || D() || K() || E()
        },
        validate_fen: function (e) {
          return function (e) {
            var t = 'No errors.',
            r = 'FEN string must contain six space-delimited fields.',
            o = '6th field (move number) must be a positive integer.',
            n = '5th field (half move counter) must be a non-negative integer.',
            l = '4th field (en-passant square) is invalid.',
            c = '3rd field (castling availability) is invalid.',
            d = '2nd field (side to move) is invalid.',
            m = '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
            f = '1st field (piece positions) is invalid [consecutive numbers].',
            h = '1st field (piece positions) is invalid [invalid piece].',
            w = '1st field (piece positions) is invalid [row too large].',
            P = 'Illegal en-passant square',
            v = e.split(/\s+/);
            if (6 !== v.length) return {
              valid: !1,
              error_number: 1,
              error: r
            };
            if (isNaN(parseInt(v[5])) || parseInt(v[5], 10) <= 0) return {
              valid: !1,
              error_number: 2,
              error: o
            };
            if (isNaN(parseInt(v[4])) || parseInt(v[4], 10) < 0) return {
              valid: !1,
              error_number: 3,
              error: n
            };
            if (!/^(-|[abcdefgh][36])$/.test(v[3])) return {
              valid: !1,
              error_number: 4,
              error: l
            };
            if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(v[2])) return {
              valid: !1,
              error_number: 5,
              error: c
            };
            if (!/^(w|b)$/.test(v[1])) return {
              valid: !1,
              error_number: 6,
              error: d
            };
            var y = v[0].split('/');
            if (8 !== y.length) return {
              valid: !1,
              error_number: 7,
              error: m
            };
            for (var i = 0; i < y.length; i++) {
              for (var k = 0, x = !1, R = 0; R < y[i].length; R++) if (isNaN(y[i][R])) {
                if (!/^[prnbqkPRNBQK]$/.test(y[i][R])) return {
                  valid: !1,
                  error_number: 9,
                  error: h
                };
                k += 1,
                x = !1
              } else {
                if (x) return {
                  valid: !1,
                  error_number: 8,
                  error: f
                };
                k += parseInt(y[i][R], 10),
                x = !0
              }
              if (8 !== k) return {
                valid: !1,
                error_number: 10,
                error: w
              }
            }
            return '3' == v[3][1] && 'w' == v[1] || '6' == v[3][1] && 'b' == v[1] ? {
              valid: !1,
              error_number: 11,
              error: P
            }
             : {
              valid: !0,
              error_number: 0,
              error: t
            }
          }(e)
        },
        fen: function () {
          return y()
        },
        board: function () {
          for (var output = [
          ], e = [
          ], i = xe.a8; i <= xe.h1; i++) null == t[i] ? e.push(null) : e.push({
            square: Ae(i),
            type: t[i].type,
            color: t[i].color
          }),
          i + 1 & 136 && (output.push(e), e = [
          ], i += 8);
          return output
        },
        pgn: function (e) {
          var t = 'object' === Object(ue.a) (e) && 'string' == typeof e.newline_char ? e.newline_char : '\n',
          r = 'object' === Object(ue.a) (e) && 'number' == typeof e.max_width ? e.max_width : 0,
          o = [
          ],
          n = !1;
          for (var i in header) o.push('[' + i + ' "' + header[i] + '"]' + t),
          n = !0;
          n && m.length && o.push(t);
          for (var l = function (e) {
            var t = f[y()];
            if (void 0 !== t) {
              var r = e.length > 0 ? ' ' : '';
              e = ''.concat(e).concat(r, '{').concat(t, '}')
            }
            return e
          }, c = [
          ]; m.length > 0; ) c.push(I());
          var h = [
          ],
          w = '';
          for (0 === c.length && h.push(l('')); c.length > 0; ) {
            w = l(w);
            var P = c.pop();
            if (m.length || 'b' !== P.color) 'w' === P.color && (w.length && h.push(w), w = d + '.');
             else {
              var v = ''.concat(d, '. ...');
              w = w ? ''.concat(w, ' ').concat(v) : v
            }
            w = w + ' ' + N(P, C({
              legal: !0
            })),
            M(P)
          }
          if (w.length && h.push(l(w)), void 0 !== header.Result && h.push(header.Result), 0 === r) return o.join('') + h.join(' ');
          var k = function () {
            return o.length > 0 && ' ' === o[o.length - 1] && (o.pop(), !0)
          },
          x = function (e, n) {
            var l,
            c = me(n.split(' '));
            try {
              for (c.s(); !(l = c.n()).done; ) {
                var d = l.value;
                if (d) {
                  if (e + d.length > r) {
                    for (; k(); ) e--;
                    o.push(t),
                    e = 0
                  }
                  o.push(d),
                  e += d.length,
                  o.push(' '),
                  e++
                }
              }
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            return k() && e--,
            e
          },
          R = 0;
          for (i = 0; i < h.length; i++) R + h[i].length > r && h[i].includes('{') ? R = x(R, h[i]) : (R + h[i].length > r && 0 !== i ? (' ' === o[o.length - 1] && o.pop(), o.push(t), R = 0) : 0 !== i && (o.push(' '), R++), o.push(h[i]), R += h[i].length);
          return o.join('')
        },
        load_pgn: function (e, t) {
          var r = void 0 !== t && 'sloppy' in t && t.sloppy;
          function mask(e) {
            return e.replace(/\\/g, '\\')
          }
          e = e.trim();
          var o = 'object' === Object(ue.a) (t) && 'string' == typeof t.newline_char ? t.newline_char : '\r?\n',
          n = new RegExp('^(\\[((?:' + mask(o) + ')|.)*\\])(?:\\s*' + mask(o) + '){2}'),
          l = n.test(e) ? n.exec(e) [1] : '';
          P();
          var c = function (header, e) {
            for (var t = 'object' === Object(ue.a) (e) && 'string' == typeof e.newline_char ? e.newline_char : '\r?\n', r = {
            }, o = header.split(new RegExp(mask(t))), n = '', l = '', i = 0; i < o.length; i++) {
              var c = /^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
              n = o[i].replace(c, '$1'),
              l = o[i].replace(c, '$2'),
              _e(n).length > 0 && (r[n] = l)
            }
            return r
          }(l, t),
          d = '';
          for (var m in c) 'fen' === m.toLowerCase() && (d = c[m]),
          k([m,
          c[m]]);
          if (r) {
            if (d && !v(d, !0)) return !1
          } else if (!('1' !== c.SetUp || 'FEN' in c && v(c.FEN, !0))) return !1;
          for (var h = function (e) {
            return e = e.replace(new RegExp(mask(o), 'g'), ' '),
            '{'.concat(function (e) {
              return Array.from(e).map((function (e) {
                return e.charCodeAt(0) < 128 ? e.charCodeAt(0).toString(16) : encodeURIComponent(e).replace(/\%/g, '').toLowerCase()
              })).join('')
            }(e.slice(1, e.length - 1)), '}')
          }, w = function (e) {
            if (e.startsWith('{') && e.endsWith('}')) return function (e) {
              return 0 == e.length ? '' : decodeURIComponent('%' + e.match(/.{1,2}/g).join('%'))
            }(e.slice(1, e.length - 1))
          }, x = e.replace(l, '').replace(new RegExp('({[^}]*})+?|;([^'.concat(mask(o), ']*)'), 'g'), (function (e, t, r) {
            return void 0 !== t ? h(t) : ' ' + h('{'.concat(r.slice(1), '}'))
          })).replace(new RegExp(mask(o), 'g'), ' '), R = /(\([^\(\)]+\))+?/g; R.test(x); ) x = x.replace(R, '');
          var F = _e(x = (x = (x = x.replace(/\d+\.(\.\.)?/g, '')).replace(/\.\.\./g, '')).replace(/\$\d+/g, '')).split(new RegExp(/\s+/));
          F = F.join(',').replace(/,,+/g, ',').split(',');
          for (var Q = '', C = '', N = 0; N < F.length; N++) {
            var A = w(F[N]);
            if (void 0 === A) if (null == (Q = z(F[N], r))) {
              if (!(be.indexOf(F[N]) > - 1)) return !1;
              C = F[N]
            } else C = '',
            M(Q);
             else f[y()] = A
          }
          return C && Object.keys(header).length && !header.Result && k(['Result',
          C]),
          !0
        },
        header: function () {
          return k(arguments)
        },
        turn: function () {
          return o
        },
        move: function (e, t) {
          var r = void 0 !== t && 'sloppy' in t && t.sloppy,
          o = null;
          if ('string' == typeof e) o = z(e, r);
           else if ('object' === Object(ue.a) (e)) for (var n = C(), i = 0, l = n.length; i < l; i++) if (e.from === Ae(n[i].from) && e.to === Ae(n[i].to) && (!('promotion' in n[i]) || e.promotion === n[i].promotion)) {
            o = n[i];
            break
          }
          if (!o) return null;
          var c = V(o);
          return M(o),
          c
        },
        undo: function () {
          var e = I();
          return e ? V(e) : null
        },
        clear: function () {
          return h()
        },
        put: function (e, t) {
          return F(e, t)
        },
        get: function (e) {
          return R(e)
        },
        ascii: function () {
          for (var s = '   +------------------------+\n', i = xe.a8; i <= xe.h1; i++) {
            if (0 === Ne(i) && (s += ' ' + '87654321'[Ce(i)] + ' |'), null == t[i]) s += ' . ';
             else {
              var e = t[i].type;
              s += ' ' + (t[i].color === Le ? e.toUpperCase() : e.toLowerCase()) + ' '
            }
            i + 1 & 136 && (s += '|\n', i += 8)
          }
          return s += '   +------------------------+\n',
          s += '     a  b  c  d  e  f  g  h'
        },
        remove: function (e) {
          return function (e) {
            var o = R(e);
            return t[xe[e]] = null,
            o && o.type === Ge && (r[o.color] = Te),
            x(y()),
            o
          }(e)
        },
        perft: function (e) {
          return L(e)
        },
        square_color: function (e) {
          if (e in xe) {
            var t = xe[e];
            return (Ce(t) + Ne(t)) % 2 == 0 ? 'light' : 'dark'
          }
          return null
        },
        history: function (e) {
          for (var t = [
          ], r = [
          ], o = (void 0 !== e && 'verbose' in e && e.verbose); m.length > 0; ) t.push(I());
          for (; t.length > 0; ) {
            var n = t.pop();
            o ? r.push(V(n)) : r.push(N(n, C({
              legal: !0
            }))),
            M(n)
          }
          return r
        },
        get_comment: function () {
          return f[y()]
        },
        set_comment: function (e) {
          f[y()] = e.replace('{', '[').replace('}', ']')
        },
        delete_comment: function () {
          var e = f[y()];
          return delete f[y()],
          e
        },
        get_comments: function () {
          return w(),
          Object.keys(f).map((function (e) {
            return {
              fen: e,
              comment: f[e]
            }
          }))
        },
        delete_comments: function () {
          return w(),
          Object.keys(f).map((function (e) {
            var t = f[e];
            return delete f[e],
            {
              fen: e,
              comment: t
            }
          }))
        }
      }
    },
    We = new le.a,
    Ze = {
      components: {
        Rule: G,
        EditorContent: U.b,
        RuleList: de
      },
      head: function () {
        return {
          script: [
            {
              type: 'text/javascript',
              async: !0,
              src: 'https://www.youtube.com/iframe_api'
            }
          ],
          bodyAttrs: {
            class : 'password-game-body'
          },
          htmlAttrs: {
            class : 'password-game-body'
          }
        }
      },
      props: {
        value: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          rules: F,
          rulesOrder: [
          ],
          password: '',
          currRuleIndex: 0,
          errorRulesIndex: 0,
          errorRules: [
          ],
          ruleReached: 1,
          currCaptcha: this.getRandomCaptcha(),
          currChessPuzzle: this.getRandomChessPuzzle(),
          randomColor: this.generateRandomColor(),
          randomYoutubeDuration: Math.floor(2000 * Math.random()) + 180,
          currYoutubeDuration: 0,
          currPlace: ne[Math.floor(Math.random() * ne.length)],
          currYoutubeId: '',
          currPlaceGuess: [
          ],
          currChessGuess: [
          ],
          editor: null,
          highlights: [
          ],
          fonts: [
            'Monospace',
            'Comic Sans'
          ],
          fontSizes: [
            '0px',
            '1px',
            '4px',
            '9px',
            '12px',
            '16px',
            '25px',
            '28px',
            '32px',
            '36px',
            '42px',
            '49px',
            '64px',
            '81px'
          ],
          sacraficedLetters: [
          ],
          wordleAnswer: '',
          tomorrowWordleAnswer: '',
          fireStarted: !1,
          isComplete: !1,
          finalPasswordDoc: null,
          finalPasswordHtml: '',
          showBold: !1,
          showItalic: !1,
          showFont: !1,
          showFontSize: !1,
          showToolbar: !1,
          eggPlaced: !1,
          paulDied: !1,
          paulHatched: !1,
          paulEating: !1,
          passwordsMatch: !1,
          deathScreenText: '',
          ChessHelper: null,
          possibleChessMoves: null,
          cleanedPossibleChessMoves: null
        }
      },
      mounted: (ze = Object(n.a) (regeneratorRuntime.mark((function e() {
        var t = this;
        return regeneratorRuntime.wrap((function (e) {
          for (; ; ) switch (e.prev = e.next) {
            case 0:
              re.configure({
                types: [
                  'textStyle'
                ]
              }),
              X.a.configure({
                depth: 20
              }),
              this.editor = new U.a({
                content: this.value,
                extensions: [
                  W.a,
                  Z.a,
                  H.a,
                  J.a,
                  re,
                  te,
                  X.a,
                  oe.a,
                  se.a
                ],
                autofocus: !0,
                onUpdate: function () {
                  t.password = t.editor.state.doc.textContent,
                  '' === t.password && t.setDefaultStyle(),
                  t.checkPassword()
                },
                editorProps: {
                  handlePaste: function (view, e, text) {
                    return !t.isComplete && t.checkForDisabledChars(text.toString())
                  }
                }
              }),
              this.setDefaultStyle(),
              this.getWordleAnswer();
            case 5:
            case 'end':
              return e.stop()
          }
        }), e, this)
      }))), function () {
        return ze.apply(this, arguments)
      }),
      computed: {
        passwordLength: function () {
          return We.splitGraphemes(this.password).length
        },
        passwordStrength: function () {
          return Object(o.a) (this.password.matchAll('🏋️‍♂️')).length
        }
      },
      methods: {
        toggleBold: function () {
          this.editor.chain().focus().toggleBold().run(),
          this.checkPassword()
        },
        toggleItalic: function () {
          this.editor.chain().focus().toggleItalic().run(),
          this.checkPassword()
        },
        applyFontSize: function (e) {
          this.editor.chain().focus().setFontSize(e.target.value).run(),
          this.checkPassword()
        },
        applyFont: function (e) {
          this.editor.chain().focus().setFontFamily(e.target.value).run(),
          this.checkPassword()
        },
        setDefaultStyle: function () {
          this.editor.chain().focus().setFontFamily(this.fonts[0]).run(),
          this.editor.chain().focus().setFontSize('28px').run()
        },
        checkPassword: function () {
          var e = this;
          if (this.isComplete) return this.passwordsMatch = this.checkIfPasswordsMatch(),
          this.addDecorations(),
          this.passwordsMatch && (this.editor.setOptions({
            editable: !1
          }), this.showToolbar = !1),
          void clearInterval(De);
          for (var t = [
          ], r = [
          ], o = {
          }, n = !0, l = !1, c = {
            currCaptcha: this.currCaptcha,
            currChessPuzzle: S[this.currChessPuzzle],
            passwordLength: this.passwordLength,
            json: this.editor.getJSON(),
            doc: this.editor.state.doc,
            sacraficedLetters: this.sacraficedLetters,
            randomColor: this.randomColor,
            wordleAnswer: this.wordleAnswer,
            tomorrowWordleAnswer: this.tomorrowWordleAnswer,
            fireStarted: this.fireStarted,
            currYoutubeDuration: this.currYoutubeDuration,
            randomYoutubeDuration: this.randomYoutubeDuration,
            eggPlaced: this.eggPlaced,
            triggerDeathAnimation: this.triggerDeathAnimation,
            paulHatched: this.paulHatched,
            paulEating: this.paulEating,
            currPlace: this.currPlace
          }, d = 0; d < this.ruleReached; d++) {
            var m = this.rules[d].test(this.password, c);
            if (m.highlights && (o[this.rules[d].id] = m.highlights), m.isValid) r.push(d),
            this.errorRules.includes(d) && this.rules[d].hasDelay && (l = !0),
            d > 1 && this.checkCompletionTriggers(this.rules[d].id),
            d === this.ruleReached - 1 && n && d < this.rules.length - 1 && (this.ruleReached++, this.checkTriggers(this.rules[this.ruleReached - 1].id));
             else t.push(d),
            n = !1
          }
          var f = function () {
            var n = [
            ].concat(r, t).reverse();
            n.toString() !== e.rulesOrder.toString() && (e.rulesOrder = n, e.errorRules = t);
            var l = e.rulesOrder[0];
            o[e.rules[l].id] ? e.highlights = o[e.rules[l].id] : e.rules[l].highlight ? e.highlights = e.rules[l].highlight(e.password, {
              doc: e.editor.state.doc,
              sacraficedLetters: e.sacraficedLetters
            }) : e.highlights = [
            ],
            e.addDecorations(),
            e.errorRulesIndex = t.length
          };
          l ? setTimeout(f, 850) : f()
        },
        getNormalizedPassword: function (e) {
          var t = [
          ];
          return e.descendants((function (e, r) {
            if ('text' === e.type.name) {
              var o,
              n,
              l = We.splitGraphemes(e.text),
              c = e.marks.some((function (mark) {
                return 'bold' === mark.type.name
              })),
              d = e.marks.some((function (mark) {
                return 'italic' === mark.type.name
              })),
              m = (null === (o = e.marks.find((function (mark) {
                return 'textStyle' === mark.type.name
              }))) || void 0 === o ? void 0 : o.attrs.fontSize) || '28px',
              f = (null === (n = e.marks.find((function (mark) {
                return 'textStyle' === mark.type.name
              }))) || void 0 === n ? void 0 : n.attrs.fontFamily) || 'Monospace';
              l.forEach((function (e) {
                t.push({
                  char: e,
                  isBold: c,
                  isItalic: d,
                  fontSize: m,
                  fontFamily: f
                })
              }))
            }
          })),
          t
        },
        checkIfPasswordsMatch: function () {
          for (var e = this.finalPasswordNormal, t = this.getNormalizedPassword(this.editor.state.doc), r = We.splitGraphemes(this.password), o = !0, n = [
          ], l = 0; l < Math.min(e.length, t.length); l++) if (e[l].char !== t[l].char || e[l].isBold !== t[l].isBold || e[l].isItalic !== t[l].isItalic || e[l].fontSize !== t[l].fontSize || e[l].fontFamily !== t[l].fontFamily) {
            o = !1;
            var c = r.slice(0, l).join('').length;
            n.push(c)
          }
          return this.highlights = n,
          e.length === t.length && o
        },
        addDecorations: function () {
          var e = this.editor.getHTML();
          e = this.addPasswordDecoration(e, this.highlights, 'error-highlight'),
          this.$refs.passwordBg.innerHTML = e
        },
        addPasswordDecoration: function (html, e, t) {
          for (var r = !1, o = '', n = 0, l = html.split(''), c = 0; c < l.length; c++) if ('<' === l[c]) r = !0,
          o += l[c];
           else if ('>' === l[c]) r = !1,
          o += l[c];
           else if (r) o += l[c];
           else {
            if ('&' === l[c]) {
              for (e.includes(n) && (o += '<span class="'.concat(t, '">')); ';' !== l[c]; ) o += l[c],
              c++;
              o += ';',
              e.includes(n) && (o += '</span>')
            } else e.includes(n) ? o += '<span class="'.concat(t, '">').concat(l[c], '</span>') : o += l[c];
            n++
          }
          return o
        },
        getRule: function (e) {
          return this.rules[this.rulesOrder[e - 1]]
        },
        checkCompletionTriggers: function (e) {
          'egg' !== e || this.eggPlaced || (this.eggPlaced = !0),
          'hatch' !== e || this.paulEating || this.startPaulEating()
        },
        checkTriggers: function (e) {
          'fire' === e && this.startFire(),
          'bold-vowels' === e && (this.showBold = !0, this.showToolbar = !0),
          'twice-italic' === e && (this.showItalic = !0),
          'digit-font-size' === e && (this.showFontSize = !0),
          'wingdings' === e && (this.fonts.push('Wingdings'), this.showFont = !0),
          'times-new-roman' === e && (this.fonts.push('Times New Roman'), this.showFont = !0),
          'hatch' === e && this.hatchEgg()
        },
        getRandomChessPuzzle: function () {
          return Math.floor(Math.random() * S.length)
        },
        getRandomCaptcha: function () {
          return Y[Math.floor(Math.random() * Y.length)]
        },
        generateRandomColor: function () {
          for (var e = '', t = 0; t > 10 || '' === e; ) t = (e = '#000000'.replace(/0/g, (function () {
            return (~~(16 * Math.random())).toString(16)
          }))).split('').reduce((function (a, b) {
            return (parseInt(a) || 0) + (parseInt(b) || 0)
          }));
          return e
        },
        refreshColor: function () {
          this.randomColor = this.generateRandomColor()
        },
        checkForPlaceGuess: function () {
          var e = this.password.toLowerCase().replaceAll(' ', ''),
          t = [
          ];
          ie.forEach((function (r) {
            e.includes(r.toLowerCase().replaceAll(' ', '')) && t.push(r)
          })),
          this.currPlaceGuess = Object(o.a) (new Set(t))
        },
        checkForChessGuess: function () {
          this.ChessHelper || (this.ChessHelper = new Ue(S[this.currChessPuzzle].fen)),
          this.possibleChessMoves || (this.possibleChessMoves = this.ChessHelper.moves(), this.cleanedPossibleChessMoves = this.possibleChessMoves.map((function (e) {
            return e.replaceAll('+', '').replaceAll('x', '')
          })));
          var e = Object(o.a) (this.password.matchAll(/((?:[KQNBR]?x?|[a-h]x)[a-h][1-8]\+?)/g)),
          t = [
          ];
          if (e) {
            e.forEach((function (e) {
              t.push(e[0])
            })),
            t = Object(o.a) (new Set(t));
            for (var r = 0; r < t.length; r++) this.possibleChessMoves.includes(t[r]) || (this.cleanedPossibleChessMoves.includes(t[r].replaceAll('+', '').replaceAll('x', '')) ? t[r] += ' (Invalid notation)' : t[r] += ' (Illegal move)');
            this.currChessGuess = t
          }
        },
        getWordleAnswer: (Ie = Object(n.a) (regeneratorRuntime.mark((function e() {
          var t,
          r,
          o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0,
                t = new Date,
                e.next = 4,
                fetch('https://neal.fun/api/password-game/wordle?date=' + t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'));
              case 4:
                return r = e.sent,
                e.next = 7,
                r.json();
              case 7:
                o = e.sent,
                this.wordleAnswer = o.answer.toLowerCase(),
                this.tomorrowWordleAnswer = o.tomorrowAnswer.toLowerCase(),
                e.next = 15;
                break;
              case 12:
                e.prev = 12,
                e.t0 = e.catch(0),
                console.log(e.t0);
              case 15:
              case 'end':
                return e.stop()
            }
          }), e, this, [
            [0,
            12]
          ])
        }))), function () {
          return Ie.apply(this, arguments)
        }),
        refreshCaptcha: function () {
          this.currCaptcha = this.getRandomCaptcha()
        },
        startFire: function () {
          var e,
          t,
          r = this;
          this.fireStarted = !0;
          for (var o = !1, n = 0, l = We.splitGraphemes(this.password); !o && n <= 25; ) {
            e = Math.floor(Math.random() * l.length),
            t = l.slice(0, e).join('').length,
            l.slice(Math.max(0, e - 5), Math.min(e + 5, this.password.length)).includes('🥚') || (o = !0),
            n++
          }
          this.addFire(t, l[e].length);
          var c = window.innerWidth > 700 ? 1100 : 1350;
          Ke = setInterval((function () {
            for (var e = We.splitGraphemes(r.password), t = We.splitGraphemes(r.password), o = 0; o < e.length; o++) if ('🔥' !== e[o] && ('🔥' === e[o - 1] || '🔥' === e[o + 1])) {
              var n = t.slice(0, o).join('').length;
              r.addFire(n, t[o].length),
              t[o] = '🔥'
            }
          }), c)
        },
        addFire: function (e, t) {
          if (e >= 0 && e <= this.password.length) {
            var r = this.editor.view.state.selection;
            this.editor.chain().focus().insertContentAt({
              from: e + 1,
              to: e + t + 1
            }, '🔥', {
              updateSelection: !1
            }).setMeta('addToHistory', !1).run(),
            this.checkPassword(),
            this.editor.commands.setTextSelection(r)
          }
        },
        sacrafice: function (e) {
          this.sacraficedLetters = e,
          this.checkPassword()
        },
        setComplete: function () {
          this.isComplete = !0,
          this.finalPasswordDoc = this.editor.state.doc,
          this.finalPasswordHtml = this.editor.getHTML(),
          this.finalPasswordNormal = this.getNormalizedPassword(this.editor.state.doc),
          this.editor.commands.clearContent(!0),
          this.setDefaultStyle()
        },
        triggerDeathAnimation: function (e) {
          this.paulDied || (this.deathScreenText = e, this.editor.setOptions({
            editable: !1
          }), this.paulDied = !0)
        },
        checkYoutubeURL: (Me = Object(n.a) (regeneratorRuntime.mark((function e() {
          var t,
          r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                (t = /youtube\.com\/watch\?v=(.{11})/.exec(this.password) || /youtu\.be\/(.{11})/.exec(this.password)) && t[1] ? (r = t[1]) !== this.currYoutubeId && (this.currYoutubeId = r, this.getYoutubeInfo(r)) : '' !== this.currYoutubeId && (qe && qe.destroy(), this.currYoutubeId = '', this.currYoutubeDuration = 0, this.checkPassword());
              case 2:
              case 'end':
                return e.stop()
            }
          }), e, this)
        }))), function () {
          return Me.apply(this, arguments)
        }),
        hatchEgg: function () {
          this.paulHatched = !0;
          var e = this.editor.getText().indexOf('🥚');
          this.editor.chain().focus().deleteRange({
            from: e + 1,
            to: e + 3
          }).insertContentAt(e + 1, '🐔', {
            updateSelection: !1
          }).run()
        },
        startPaulEating: function () {
          var e = this;
          this.paulEating = !0,
          setTimeout((function () {
            e.eatBug(),
            De = setInterval(e.eatBug, 15000)
          }), 3000)
        },
        checkForDisabledChars: function (text) {
          return !(!this.eggPlaced || !text.includes('🥚')) || (!(!this.paulHatched || !text.includes('🐔')) || void 0)
        },
        eatBug: function () {
          if (!this.isComplete) {
            var e = this.password.match(/🐛/g),
            t = this.editor.getText().indexOf('🐛');
            if (!e || e.length >= 9) {
              var r = this.editor.getText().indexOf('🐔');
              return this.triggerDeathAnimation(e ? 'Paul was overfed' : 'Paul has starved'),
              this.editor.chain().focus().deleteRange({
                from: r + 1,
                to: r + 3
              }).insertContentAt(r + 1, '🪦', {
                updateSelection: !1
              }).run(),
              void clearInterval(De)
            }
            this.editor.commands.deleteRange({
              from: t + 1,
              to: t + 3
            })
          }
        },
        getYoutubeInfo: (Ee = Object(n.a) (regeneratorRuntime.mark((function e(t) {
          var r = this;
          return regeneratorRuntime.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                this.$nextTick((function () {
                  qe && qe.destroy(),
                  r.currYoutubeDuration = 0,
                  r.checkPassword();
                  var e = !1;
                  qe = new YT.Player('youtube-player', {
                    height: '250px',
                    width: '100%',
                    videoId: t,
                    playerVars: {
                      autoplay: 0,
                      controls: 1
                    },
                    events: {
                      onReady: function () {
                        e || (r.currYoutubeDuration = qe.getDuration(), r.checkPassword(), e = !0)
                      }
                    }
                  })
                }));
              case 1:
              case 'end':
                return e.stop()
            }
          }), e, this)
        }))), function (e) {
          return Ee.apply(this, arguments)
        })
      },
      watch: {
        currCaptcha: function () {
          this.checkPassword()
        },
        password: function () {
          var e = this;
          this.rulesOrder.some((function (t) {
            return 'youtube' === e.rules[t].id
          })) && this.checkYoutubeURL(),
          this.errorRules.some((function (t) {
            return 'geo' === e.rules[t].id
          })) && this.checkForPlaceGuess(),
          this.errorRules.some((function (t) {
            return 'chess' === e.rules[t].id
          })) && this.checkForChessGuess()
        }
      },
      beforeDestroy: function () {
        qe && qe.destroy(),
        clearInterval(De),
        clearInterval(Ke)
      }
    },
    He = Ze,
    Je = (r(997), r(999), Object(N.a) (He, (function () {
      var e = this,
      t = e._self._c;
      return t('div', {
        staticClass: 'wrapper'
      }, [
        t('div', {
          staticClass: 'site-title'
        }, [
          t('nuxt-link', {
            attrs: {
              to: '/'
            }
          }, [
            t('logo', {
              attrs: {
                color: 'black'
              }
            })
          ], 1)
        ], 1),
        e._v(' '),
        t('img', {
          staticClass: 'title',
          attrs: {
            src: '/password-game/title.svg'
          }
        }),
        e._v(' '),
        t('div', {
          staticClass: 'password-wrapper',
          class : {
            'has-toolbar': e.showToolbar
          }
        }, [
          e.isComplete ? t('div', {
            staticClass: 'password-box'
          }, [
            t('div', {
              staticClass: 'password-label'
            }, [
              e._v('Your password')
            ]),
            e._v(' '),
            t('div', {
              ref: 'passwordCopy',
              staticClass: 'ProseMirror password-final',
              domProps: {
                innerHTML: e._s(e.finalPasswordHtml)
              }
            })
          ]) : e._e(),
          e._v(' '),
          t('div', {
            staticClass: 'password-box'
          }, [
            t('div', {
              staticClass: 'password-label'
            }, [
              e._v('\n        ' + e._s(e.isComplete ? 'Please re-type your password' : 'Please choose a password') + '\n      ')
            ]),
            e._v(' '),
            t('div', {
              staticClass: 'password-box-inner',
              class : {
                complete: e.isComplete
              }
            }, [
              t('div', {
                ref: 'passwordBg',
                staticClass: 'password-bg',
                class : {
                  'password-bg-loading': null === e.editor
                }
              }),
              e._v(' '),
              t('editor-content', {
                attrs: {
                  editor: e.editor,
                  spellcheck: 'false'
                }
              }),
              e._v(' '),
              t('div', {
                staticClass: 'password-length',
                class : {
                  'show-password-length': 0 !== e.passwordLength && !e.passwordsMatch
                }
              }, [
                e._v('\n          ' + e._s(e.passwordLength) + '\n        ')
              ])
            ], 1)
          ]),
          e._v(' '),
          t('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.showToolbar,
                expression: 'showToolbar'
              }
            ],
            staticClass: 'toolbar'
          }, [
            e.showBold ? t('button', {
              class : {
                'is-active': e.editor && e.editor.isActive('bold')
              },
              on: {
                click: e.toggleBold
              }
            }, [
              e._v('\n        Bold\n      ')
            ]) : e._e(),
            e._v(' '),
            e.showItalic ? t('button', {
              class : {
                'is-active': e.editor && e.editor.isActive('italic')
              },
              on: {
                click: e.toggleItalic
              }
            }, [
              e._v('\n        Italic\n      ')
            ]) : e._e(),
            e._v(' '),
            e.showFontSize ? t('select', {
              on: {
                change: e.applyFontSize
              }
            }, e._l(e.fontSizes, (function (r) {
              return t('option', {
                key: r,
                domProps: {
                  value: r,
                  selected: e.editor && (e.editor.isActive('textStyle', {
                    fontSize: r
                  }) || !e.editor.isActive('textStyle') && '28px' === r)
                }
              }, [
                e._v('\n          ' + e._s(r) + '\n        ')
              ])
            })), 0) : e._e(),
            e._v(' '),
            e.showFont ? t('select', {
              on: {
                change: e.applyFont
              }
            }, e._l(e.fonts, (function (r) {
              return t('option', {
                key: r,
                domProps: {
                  value: r,
                  selected: e.editor && e.editor.isActive('textStyle', {
                    fontFamily: r
                  })
                }
              }, [
                e._v('\n          ' + e._s(r) + '\n        ')
              ])
            })), 0) : e._e()
          ]),
          e._v(' '),
          t('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: !e.passwordsMatch && e.finalPasswordDoc,
                expression: '!passwordsMatch && finalPasswordDoc'
              }
            ],
            staticClass: 'error-match'
          }, [
            e._v('\n      Your passwords must match\n    ')
          ]),
          e._v(' '),
          t('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.passwordsMatch && e.finalPasswordDoc,
                expression: 'passwordsMatch && finalPasswordDoc'
              }
            ],
            staticClass: 'end-screen'
          }, [
            t('b', [
              e._v('Congratulations!')
            ]),
            e._v(' You have sucessfully chosen a password in\n      ' + e._s(e.passwordLength) + ' characters.\n    ')
          ]),
          e._v(' '),
          e.paulDied ? t('div', {
            staticClass: 'death-screen'
          }, [
            t('div', {
              staticClass: 'death-screen-strip'
            }, [
              e._v(e._s(e.deathScreenText))
            ])
          ]) : e._e(),
          e._v(' '),
          e.isComplete ? e._e() : t('div', [
            t('RuleList', {
              attrs: {
                errorRulesIndex: e.errorRulesIndex,
                rulesOrder: e.rulesOrder,
                currCaptcha: e.currCaptcha,
                currChessPuzzle: e.currChessPuzzle,
                randomColor: e.randomColor,
                passwordStrength: e.passwordStrength,
                randomYoutubeDuration: e.randomYoutubeDuration,
                currYoutubeId: e.currYoutubeId,
                currPlace: e.currPlace,
                currPlaceGuess: e.currPlaceGuess,
                currChessGuess: e.currChessGuess,
                numErrors: e.errorRules.length
              },
              on: {
                refreshColor: e.refreshColor,
                captchaRefresh: e.refreshCaptcha,
                sacrafice: e.sacrafice,
                done: e.setComplete
              }
            })
          ], 1)
        ]),
        e._v(' '),
        e.ruleReached > 5 && !e.isComplete ? t('Footer', {
          attrs: {
            bg: 'none',
            color: 'black'
          }
        }) : e._e()
      ], 1)
    }), [
    ], !1, null, '56b284df', null));
    t.default = Je.exports;
    installComponents(Je, {
      Logo: r(288).default,
      Footer: r(295).default
    })
  },
  277: function (e, t, r) {
    var content = r(285);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('f68e4eaa', content, !0, {
      sourceMap: !1
    })
  },
  278: function (e, t, r) {
    var content = r(291);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('db35a8f0', content, !0, {
      sourceMap: !1
    })
  },
  279: function (e, t, r) {
    var content = r(294);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('c9434642', content, !0, {
      sourceMap: !1
    })
  },
  280: function (e, t, r) {
    'use strict';
    r.r(t);
    r(276);
    var o = {
      props: {
        slotId: {
          type: String,
          required: !0
        },
        adFormat: {
          type: String,
          required: !0
        },
        isResponsive: {
          type: Boolean,
          required: !1,
        default:
          !1
        },
        adStyle: {
          type: String,
          required: !0
        },
        minWidth: {
          type: Number,
          required: !1,
        default:
          - 1
        },
        maxWidth: {
          type: Number,
          required: !1,
        default:
          - 1
        }
      },
      data: function () {
        return {
          hideAd: !1,
          shouldShow: this.shouldShowAd()
        }
      },
      mounted: function () {
        var e = this;
        this.createAds(),
        this.$addEventListener('resize', (function () {
          e.hideAd = !e.shouldShowAd()
        }))
      },
      watch: {
        $route: function () {
          this.firstLoad = !1,
          this.createAds()
        }
      },
      methods: {
        createAds: function () {
          var e = this;
          this.$nextTick((function () {
            e.shouldShowAd() && (window.adsbygoogle = window.adsbygoogle || [
            ], adsbygoogle.push({
            }))
          }))
        },
        shouldShowAd: function () {
          return ( - 1 === this.minWidth || window.innerWidth >= this.minWidth) && ( - 1 === this.maxWidth || window.innerWidth < this.maxWidth)
        }
      },
      beforeDestroy: function () {
        window.top.__vm_remove = window.top.__vm_remove || [
        ],
        window.top.__vm_remove.push(this.$refs.adPlacement)
      }
    },
    n = (r(284), r(28)),
    component = Object(n.a) (o, (function () {
      var e = this,
      t = e._self._c;
      return t('client-only', [
        e.shouldShow ? t('ins', {
          staticClass: 'adsbygoogle',
          class : {
            hide: e.hideAd
          },
          style: e.adStyle,
          attrs: {
            'data-ad-client': 'ca-pub-4556406968269041',
            'data-ad-slot': e.slotId,
            'data-ad-format': e.adFormat,
            'data-full-width-responsive': e.isResponsive
          }
        }) : t('div')
      ])
    }), [
    ], !1, null, '8af1cc2e', null);
    t.default = component.exports
  },
  284: function (e, t, r) {
    'use strict';
    r(277)
  },
  285: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.hide[data-v-8af1cc2e]{display:none!important}',
    '']),
    e.exports = o
  },
  287: function (e, t, r) {
    e.exports = r.p + 'fonts/RobotoCondensed-Light.f982e4a.woff2'
  },
  290: function (e, t, r) {
    'use strict';
    r(278)
  },
  291: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.link{border-radius:19px;aspect-ratio:391/145;display:block;position:relative;z-index:2}.link-img{max-width:100%;cursor:pointer;transition:transform .07s linear,filter .1s ease-out,opacity .15s linear;opacity:0}.link-img:hover{transform:scale(1.02);filter:drop-shadow(3px 3px 5px rgba(0,0,0,.17))}',
    '']),
    e.exports = o
  },
  292: function (e, t, r) {
    'use strict';
    r.r(t);
    var o = {
      props: {
        title: {
          required: !0,
          type: String
        },
        path: {
          required: !0,
          type: String
        },
        preload: {
          required: !1,
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          imageLoaded: !1
        }
      }
    },
    n = (r(290), r(28)),
    component = Object(n.a) (o, (function () {
      var e = this,
      t = e._self._c;
      return t('nuxt-link', {
        staticClass: 'link',
        style: {
          background: e.imageLoaded ? 'none' : '#f1f2f6'
        },
        attrs: {
          prefetch: e.preload,
          to: '/'.concat(e.path, '/')
        }
      }, [
        t('img', {
          staticClass: 'link-img',
          style: {
            opacity: e.imageLoaded ? 1 : 0
          },
          attrs: {
            onload: e.imageLoaded = !0,
            alt: e.title,
            src: '/link-images/'.concat(e.path, '.svg'),
            loading: 'lazy'
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  293: function (e, t, r) {
    'use strict';
    r(279)
  },
  294: function (e, t, r) {
    var o = r(107),
    n = r(200),
    l = r(287),
    c = o(!1),
    d = n(l);
    c.push([e.i,
    '@font-face{font-family:RobotoCondensedLight;src:url(' + d + ')}.footer-wrapper[data-v-2b1aca38]{margin-top:15px;padding:30px 20px 45px;text-align:center;font-size:22px;font-family:RobotoCondensedLight,sans-serif}.related-text[data-v-2b1aca38]{font-size:22px}.site-title[data-v-2b1aca38]{margin-top:18px;max-width:140px}.related-posts[data-v-2b1aca38],.site-title[data-v-2b1aca38]{margin-left:auto;margin-right:auto}.related-posts[data-v-2b1aca38]{display:grid;max-width:870px;grid-template-columns:repeat(2,1fr);grid-gap:16px 18px;margin-top:15px;font-size:0}.made-by[data-v-2b1aca38]{font-size:16px;margin-top:15px;opacity:.6;display:none}.made-by a[data-v-2b1aca38]{color:#000}.heart[data-v-2b1aca38]{width:17px;height:17px;position:relative;top:4px}.site-title-logo[data-v-2b1aca38]{height:25px}.newsletter-text[data-v-2b1aca38]{font-size:19px;margin-bottom:8px}.newsletter-img[data-v-2b1aca38]{height:16px;position:relative;top:3px;margin-right:7px}.newsletter-input[data-v-2b1aca38]{font-size:17px;padding:7px 5px 7px 40px;border-radius:5px;border:1px solid #000;max-width:220px;width:100%;background-color:#fff;background-image:url(/general/mail.svg);background-repeat:no-repeat;background-size:auto 15px;background-position:10px;font-family:RobotoCondensedLight;outline:none;color:#000}.newsletter-input[data-v-2b1aca38]::-moz-placeholder{color:rgba(0,0,0,.8)}.newsletter-input[data-v-2b1aca38]::placeholder{color:rgba(0,0,0,.8)}.newsletter-subscribe[data-v-2b1aca38]{background:#fff5d9;font-size:17px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:1px solid #000;border-radius:5px;padding:7px 12px;margin-left:5px;height:100%;cursor:pointer;color:#000;font-family:RobotoCondensedLight}.newsletter-subscribe[data-v-2b1aca38]:hover{transform:scale(1.03)}.newsletter-box[data-v-2b1aca38]{padding:20px 10px;border-radius:5px;margin-left:auto;margin-right:auto;margin-top:10px}.newsletter-inner[data-v-2b1aca38]{display:flex;justify-content:center;height:42px}@media only screen and (max-width:700px){.footer-wrapper[data-v-2b1aca38]{padding-left:12px;padding-right:12px}.related-posts[data-v-2b1aca38]{grid-template-columns:repeat(1,1fr)}.site-title[data-v-2b1aca38]{max-width:145px;margin-top:25px}}',
    '']),
    e.exports = c
  },
  295: function (e, t, r) {
    'use strict';
    r.r(t);
    var o,
    n = r(286),
    l = r(10),
    c = (r(45), r(15), r(204), r(60), r(297)),
    d = r.n(c),
    m = r(289),
    f = {
      props: {
        color: {
          type: String,
          required: !1,
        default:
          'black'
        },
        bg: {
          type: String,
          required: !1,
        default:
          'white'
        }
      },
      data: function () {
        return {
          related: [
          ],
          submittedEmail: !1,
          email: ''
        }
      },
      mounted: function () {
        this.getRelated()
      },
      computed: {
        isValidEmail: function () {
          return m.validate(this.email)
        }
      },
      methods: {
        onEmailSubmit: (o = Object(l.a) (regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                if (!this.isValidEmail) {
                  e.next = 4;
                  break
                }
                return this.submittedEmail = !0,
                e.next = 4,
                d() ({
                  url: 'https://neal.fun/api/newsletter/subscribe',
                  method: 'POST',
                  data: {
                    email: this.email
                  }
                });
              case 4:
              case 'end':
                return e.stop()
            }
          }), e, this)
        }))), function () {
          return o.apply(this, arguments)
        }),
        getRelated: function () {
          var e = window.innerWidth > 500 ? 4 : 3,
          t = Object(n.a) (this.$store.state.posts),
          r = this.$route.path;
          t = t.filter((function (e) {
            return '/'.concat(e.path, '/') !== r && !e.hidden && !e.hideInRecommended
          }));
          for (var o = [
          ], l = 0; l < e; l++) {
            var c = Math.floor(Math.random() * t.length);
            o.push(t[c]),
            t.splice(c, 1)
          }
          this.related = o
        }
      }
    },
    h = f,
    w = (r(293), r(28)),
    component = Object(w.a) (h, (function () {
      var e = this,
      t = e._self._c;
      return t('div', [
        t('Ad', {
          attrs: {
            slotId: '2834998355',
            adStyle: 'display: block; margin-left: auto; margin-right: auto; max-width: min(970px, calc(100% - 60px)); margin-top: 15px;',
            adFormat: 'auto',
            isResponsive: !0,
            minWidth: 800
          }
        }),
        e._v(' '),
        t('Ad', {
          attrs: {
            slotId: '2834998355',
            adStyle: 'display: block; margin-left: auto; margin-right: auto; margin-top: 15px;',
            adFormat: 'auto',
            isResponsive: !0,
            maxWidth: 800
          }
        }),
        e._v(' '),
        t('div', {
          staticClass: 'footer-wrapper',
          style: {
            color: e.color,
            background: e.bg
          }
        }, [
          t('div', {
            staticClass: 'related-text'
          }, [
            e._v('You may also like')
          ]),
          e._v(' '),
          t('div', {
            staticClass: 'related-posts'
          }, e._l(e.related, (function (e) {
            return t('page-link', {
              key: e.title,
              attrs: {
                bg: '#f1f2f6',
                path: e.path,
                title: e.title,
                preload: e.preload
              }
            })
          })), 1),
          e._v(' '),
          t('div', {
            staticClass: 'newsletter-box'
          }, [
            t('div', {
              staticClass: 'newsletter-text'
            }, [
              e._v('\n        ' + e._s(e.submittedEmail ? 'Thanks for subscribing :)' : 'Get new posts!') + '\n      ')
            ]),
            e._v(' '),
            e.submittedEmail ? e._e() : t('form', {
              staticClass: 'newsletter-inner',
              on: {
                submit: function (t) {
                  return t.preventDefault(),
                  e.onEmailSubmit.apply(null, arguments)
                }
              }
            }, [
              t('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.email,
                    expression: 'email'
                  }
                ],
                staticClass: 'newsletter-input',
                attrs: {
                  type: 'email',
                  placeholder: 'Your email'
                },
                domProps: {
                  value: e.email
                },
                on: {
                  input: function (t) {
                    t.target.composing || (e.email = t.target.value)
                  }
                }
              }),
              e._v(' '),
              t('button', {
                staticClass: 'newsletter-subscribe'
              }, [
                e._v('Subscribe')
              ])
            ])
          ]),
          e._v(' '),
          t('div', {
            staticClass: 'made-by'
          }, [
            e._v('\n      Made with\n      '),
            t('svg', {
              staticClass: 'heart',
              staticStyle: {
                'enable-background': 'new 0 0 512 512'
              },
              attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                'xmlns:svgjs': 'http://svgjs.com/svgjs',
                version: '1.1',
                width: '512',
                height: '512',
                x: '0',
                y: '0',
                viewBox: '0 0 512.001 512',
                'xml:space': 'preserve'
              }
            }, [
              t('g', [
                t('path', {
                  attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    d: 'm256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0',
                    fill: e.color,
                    'data-original': '#000000'
                  }
                })
              ])
            ]),
            e._v('\n      by Neal Agarwal\n    ')
          ]),
          e._v(' '),
          t('div', {
            staticClass: 'site-title'
          }, [
            t('nuxt-link', {
              attrs: {
                to: '/'
              }
            }, [
              t('logo', {
                attrs: {
                  color: e.color
                }
              })
            ], 1)
          ], 1)
        ])
      ], 1)
    }), [
    ], !1, null, '2b1aca38', null);
    t.default = component.exports;
    installComponents(component, {
      Ad: r(280).default,
      PageLink: r(292).default,
      Logo: r(288).default
    })
  },
  515: function (e, t, r) {
    var content = r(966);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('110ea0e6', content, !0, {
      sourceMap: !1
    })
  },
  516: function (e, t, r) {
    var content = r(968);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('2c5ef88d', content, !0, {
      sourceMap: !1
    })
  },
  517: function (e, t, r) {
    var content = r(970);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('4fe4bd0f', content, !0, {
      sourceMap: !1
    })
  },
  518: function (e, t, r) {
    var content = r(972);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('330256c0', content, !0, {
      sourceMap: !1
    })
  },
  519: function (e, t, r) {
    var content = r(974);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('2f091992', content, !0, {
      sourceMap: !1
    })
  },
  520: function (e, t, r) {
    var content = r(976);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('46631eb1', content, !0, {
      sourceMap: !1
    })
  },
  521: function (e, t, r) {
    var content = r(978);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('7cd1a24d', content, !0, {
      sourceMap: !1
    })
  },
  522: function (e, t, r) {
    var content = r(980);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('4077bf3a', content, !0, {
      sourceMap: !1
    })
  },
  523: function (e, t, r) {
    var content = r(982);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('1c11d4a4', content, !0, {
      sourceMap: !1
    })
  },
  524: function (e, t, r) {
    var content = r(984);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('b94002d2', content, !0, {
      sourceMap: !1
    })
  },
  526: function (e, t, r) {
    var content = r(995);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('a81a4d70', content, !0, {
      sourceMap: !1
    })
  },
  527: function (e, t, r) {
    var content = r(998);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('be0a3e80', content, !0, {
      sourceMap: !1
    })
  },
  528: function (e, t, r) {
    var content = r(1000);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, r(108).default) ('4ac24734', content, !0, {
      sourceMap: !1
    })
  },
  965: function (e, t, r) {
    'use strict';
    r(515)
  },
  966: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.captcha-img[data-v-23a0f4d4]{width:200px;border-radius:5px;border:1px solid #000;display:block;pointer-events:none}.captcha-wrapper[data-v-23a0f4d4]{display:grid;grid-template-columns:auto 40px;width:250px;justify-items:center;align-items:center;margin-top:10px;margin-left:auto;margin-right:auto}.captcha-refresh[data-v-23a0f4d4]{display:block;width:25px;cursor:pointer;touch-action:manipulation}.captcha-refresh[data-v-23a0f4d4]:hover{transform:scale(1.06)}',
    '']),
    e.exports = o
  },
  967: function (e, t, r) {
    'use strict';
    r(516)
  },
  968: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.chess-wrapper[data-v-f5286d7c]{margin-top:10px}.move[data-v-f5286d7c]{text-align:center;font-style:italic}.chess-img[data-v-f5286d7c]{border-radius:15px;pointer-events:none}.guesses[data-v-f5286d7c]{display:flex;grid-gap:0 25px;flex-wrap:wrap;justify-content:center;display:none;margin-bottom:15px}.rule-error .guesses[data-v-f5286d7c]{display:flex}.guess-icon[data-v-f5286d7c]{width:20px;margin-right:3px;position:relative;top:4px}',
    '']),
    e.exports = o
  },
  969: function (e, t, r) {
    'use strict';
    r(517)
  },
  970: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.letters[data-v-5ed0912a]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;grid-gap:5px}.sacrafice-area[data-v-5ed0912a]{margin-top:13px;max-width:400px;margin-left:auto;margin-right:auto}.letter[data-v-5ed0912a]{width:38px;height:38px;border-radius:5px;cursor:pointer;transition:background .2s ease-in-out,opacity .2s ease-in-out;border:1px solid #b3b3b3;background:#fff;color:#000;font-family:Arial;font-size:13px}.letter[data-v-5ed0912a],.sacrafice-btn[data-v-5ed0912a]{box-shadow:2px 2px 2px 0 rgba(0,0,0,.05)}.letter[data-v-5ed0912a]:hover{transform:scale(1.05)}.letter[data-v-5ed0912a]:disabled{cursor:auto}.letter[data-v-5ed0912a]:disabled:hover{transform:none}.letter-selected[data-v-5ed0912a]{background:#000;color:#fff;border-color:#000;box-shadow:none;position:relative}.sacrafice-btn[data-v-5ed0912a]{text-align:center;font-size:18px;border-radius:5px;padding:10px 20px;cursor:pointer;display:block;margin:18px auto 5px;transition:background .3s ease-in-out,opacity .3s ease-in-out;background:#000;color:#fff;border:1px solid #000}.sacrafice-btn[data-v-5ed0912a]:hover{transform:scale(1.04)}.sacrafice-btn[data-v-5ed0912a]:disabled{border-color:#000;color:#fff;pointer-events:none;opacity:.5}.sacrafice-made .letter-selected[data-v-5ed0912a]{animation:sacrafice-5ed0912a .5s ease-in-out forwards}.sacrafice-icon[data-v-5ed0912a]{height:17px;position:relative;top:2px;margin-right:2px}.sacrafice-made .sacrafice-icon[data-v-5ed0912a]{filter:invert(100%)}@keyframes sacrafice-5ed0912a{0%{opacity:1}to{opacity:0;transform:translateY(-20px)}}.sacrafice-made .sacrafice-btn[data-v-5ed0912a]{background:#fff;color:#000;border:1px solid #000;box-shadow:none}',
    '']),
    e.exports = o
  },
  971: function (e, t, r) {
    'use strict';
    r(518)
  },
  972: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.rand-color[data-v-79833e4e]{width:100%;height:150px;pointer-events:none;margin-top:15px;border-radius:15px;position:relative}.rand-color[data-v-79833e4e],.refresh[data-v-79833e4e]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.refresh[data-v-79833e4e]{position:absolute;bottom:5px;right:5px;background:#fff;padding:5px;border-radius:15px;width:36px;cursor:pointer;z-index:3;pointer-events:auto;box-shadow:2px 2px 2px 0 rgba(0,0,0,.05);border:1px solid #b3b3b3}.refresh[data-v-79833e4e]:hover{transform:scale(1.04)}',
    '']),
    e.exports = o
  },
  973: function (e, t, r) {
    'use strict';
    r(519)
  },
  974: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.geo-wrapper[data-v-490deea8]{width:100%;height:100%;aspect-ratio:1/1;overflow:hidden;border-radius:15px;margin-top:12px;isolation:isolate}.geo[data-v-490deea8]{width:100%;height:calc(100% + 85px);border:none;margin-top:-70px}.guesses[data-v-490deea8]{margin-top:10px;display:flex;grid-gap:0 25px;flex-wrap:wrap;justify-content:center;display:none}.rule-error .guesses[data-v-490deea8]{display:flex}.guess-icon[data-v-490deea8]{width:20px;margin-right:3px;position:relative;top:4px}',
    '']),
    e.exports = o
  },
  975: function (e, t, r) {
    'use strict';
    r(520)
  },
  976: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.strength[data-v-c15cedce]{width:100%;margin-top:10px}.bars[data-v-c15cedce]{width:100%;height:22px;border-radius:100%;display:grid;grid-template-columns:repeat(4,1fr);border-radius:15px;overflow:hidden;background:#fff;border:1px solid #464646}.bar[data-v-c15cedce]{width:100%;height:100%;transform:scaleX(0);transform-origin:center left;transition:transform .4s ease-in-out;border-right:1px solid #464646}.bar.active[data-v-c15cedce]{transform:scaleX(1)}.bar-red[data-v-c15cedce]{background:#ff4141}.bar-orange[data-v-c15cedce]{background:#ffa54c}.bar-yellow[data-v-c15cedce]{background:#ffff59}.bar-green[data-v-c15cedce]{background:#5aff5a;border-right:none}',
    '']),
    e.exports = o
  },
  977: function (e, t, r) {
    'use strict';
    r(521)
  },
  978: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.sponsors[data-v-290ad9f2]{margin-top:15px;display:flex;justify-content:center;align-items:center}.sponsor[data-v-290ad9f2]{margin-left:17px;margin-right:17px;pointer-events:none}.sponsor.pepsi[data-v-290ad9f2],.sponsor.shell[data-v-290ad9f2],.sponsor.starbucks[data-v-290ad9f2]{height:85px}',
    '']),
    e.exports = o
  },
  979: function (e, t, r) {
    'use strict';
    r(522)
  },
  980: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '#youtube-player{width:100%;border-radius:15px}',
    '']),
    e.exports = o
  },
  981: function (e, t, r) {
    'use strict';
    r(523)
  },
  982: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '#youtube-player-wrapper.active[data-v-68e67607]{margin-top:15px}',
    '']),
    e.exports = o
  },
  983: function (e, t, r) {
    'use strict';
    r(524)
  },
  984: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.rule[data-v-520e375b]{background-color:#e3ffe3;border:1px solid #267b30;box-shadow:3px 3px 5px 2px rgba(60,155,71,.2);color:#000;padding:0;width:100%;line-height:1.53em;text-align:left;margin:22px auto;border-radius:10px;transition:background-color .7s ease-in-out;font-size:18px;opacity:0;animation:fadeIn-520e375b .5s ease-in-out forwards;position:relative;word-spacing:0;overflow:hidden}@keyframes fadeIn-520e375b{0%{opacity:0}to{opacity:1}}.rule-error[data-v-520e375b]{background-color:#ffecec;border:1px solid red;color:#000;box-shadow:2px 2px 5px 2px rgba(255,0,0,.12)}.rule-top[data-v-520e375b]{display:block;padding:8px 16px 5px;background-color:#aef3ae;transition:background-color .7s ease-in-out}.rule-error .rule-top[data-v-520e375b]{background-color:#ffc7c7}.rule-desc[data-v-520e375b]{padding:11px 17px 15px}.rule-icon[data-v-520e375b]{position:relative;width:19px;height:19px;top:3px;left:-1px;pointer-events:none}.final .rule-top[data-v-520e375b]{display:none}.final.rule[data-v-520e375b]{padding-top:3px}.affirmation-list[data-v-520e375b]{margin-top:7px}.final-password[data-v-520e375b]{margin-top:10px;display:flex;grid-gap:8px}.final-password button[data-v-520e375b]{background:#fff;font-size:16px;padding:5px 11px;border-radius:5px;cursor:pointer;border:1px solid #b3b3b3;box-shadow:2px 2px 2px 0 rgba(0,0,0,.05);color:#000}.final-password button[data-v-520e375b]:hover{transform:scale(1.05)}.final-hide[data-v-520e375b]{display:none}@media screen and (max-width:600px){.rule[data-v-520e375b]{margin:20px 0}}',
    '']),
    e.exports = o
  },
  994: function (e, t, r) {
    'use strict';
    r(526)
  },
  995: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.list-move{transition:transform .5s ease-in-out}.list-enter-active,.list-leave-active{transition:opacity .5s ease-in-out}.list-enter,.list-leave-to{opacity:0}',
    '']),
    e.exports = o
  },
  997: function (e, t, r) {
    'use strict';
    r(527)
  },
  998: function (e, t, r) {
    var o = r(107) (!1);
    o.push([e.i,
    '.ProseMirror{width:100%;padding:15px;font-size:28px;border:1px solid #9d9d9d;border-radius:10px;resize:none;overflow:hidden;word-break:break-all;font-family:monospace;min-height:64px;outline:none;background:none;transition:border-color .15s ease-in-out,border-radius .1s ease-in-out;contain:layout}.has-toolbar .ProseMirror{border-bottom-left-radius:0;border-bottom-right-radius:0}.ProseMirror:focus{border-color:#000}.error-highlight{background:#ffd9d9}.password-game-body{background-color:#fffae9!important}',
    '']),
    e.exports = o
  },
  999: function (e, t, r) {
    'use strict';
    r(528)
  }
}
]);
