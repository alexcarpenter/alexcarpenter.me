---
title: Dotfiles
description: My set of configuration files.
published: 2024-06-19T07:15:02-0400
---

## iTerm 2

![Screenshot of iTerm 2 setup](/img/iterm-2.png)

<details>
<summary>.zshrc</summary>

```
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="agnoster"

plugins=(git jump)

source $ZSH/oh-my-zsh.sh

prompt_dir() {
  prompt_segment blue black '%1~'
}

DEFAULT_USER=`whoami`

alias lg="lazygit"
alias mc="make checkpoint"
```

</details>

## VS Code

![Screenshot of VS Code setup](/img/vs-code.png)

<details>
<summary>settings.json</summary>

```json
{
  "workbench.colorTheme": "Ayu Dark",
  "workbench.tree.indent": 20,
  "editor.fontFamily": "JetBrains Mono NL, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 15,
  "editor.tabSize": 2,
  "editor.cursorStyle": "block",
  "editor.lineHeight": 1.75,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "all",
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "workbench.startupEditor": "none",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "phase",
  "workbench.fontAliasing": "antialiased",
  "workbench.sideBar.location": "right",
  "terminal.integrated.fontSize": 15,
  "terminal.integrated.lineHeight": 1.2,
  "workbench.settings.editor": "json",
  "window.title": "${activeEditorLong}${separator}${rootName}",
  "workbench.statusBar.visible": false,
  "git.mergeEditor": false,
  "editor.stickyScroll.enabled": true,
  "editor.accessibilitySupport": "off",
  "git.autofetch": true
}
```

</details>

## Karabiner Elements

<details>
<summary>karabiner.json</summary>

```json
{
  "global": {
    "ask_for_confirmation_before_quitting": true,
    "check_for_updates_on_startup": true,
    "show_in_menu_bar": false,
    "show_profile_name_in_menu_bar": false,
    "unsafe_ui": false
  },
  "profiles": [
    {
      "complex_modifications": {
        "parameters": {
          "basic.simultaneous_threshold_milliseconds": 50,
          "basic.to_delayed_action_delay_milliseconds": 500,
          "basic.to_if_alone_timeout_milliseconds": 1000,
          "basic.to_if_held_down_threshold_milliseconds": 500,
          "mouse_motion_to_scroll.speed": 100
        },
        "rules": [
          {
            "description": "New Rule (change left_shift+caps_lock to page_down, right_shift+caps_lock to left_command+mission_control)",
            "manipulators": [
              {
                "description": "Change right command to command+control+option+shift.",
                "from": {
                  "key_code": "right_command",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "left_command",
                    "modifiers": ["left_control", "left_option", "left_shift"]
                  }
                ],
                "type": "basic"
              }
            ]
          },
          {
            "description": "CAPS › ESC, CAPS+H/J/K/L › ←↓↑→, CAPS+D/U › PG↓↑",
            "manipulators": [
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "j",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "down_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "k",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "up_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "h",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "left_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "l",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "right_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "d",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "page_down"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "u",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "page_up"
                  }
                ],
                "type": "basic"
              },
              {
                "from": {
                  "key_code": "caps_lock",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "set_variable": {
                      "name": "caps_lock pressed",
                      "value": 1
                    }
                  }
                ],
                "to_after_key_up": [
                  {
                    "set_variable": {
                      "name": "caps_lock pressed",
                      "value": 0
                    }
                  }
                ],
                "to_if_alone": [
                  {
                    "key_code": "escape"
                  }
                ],
                "type": "basic"
              }
            ]
          },
          {
            "description": "CAPS › ESC, CAPS+H/J/K/L › ←↓↑→, CAPS+D/U › PG↓↑",
            "manipulators": [
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "j",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "down_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "k",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "up_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "h",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "left_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "l",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "right_arrow"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "d",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "page_down"
                  }
                ],
                "type": "basic"
              },
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "u",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "page_up"
                  }
                ],
                "type": "basic"
              },
              {
                "from": {
                  "key_code": "caps_lock",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "set_variable": {
                      "name": "caps_lock pressed",
                      "value": 1
                    }
                  }
                ],
                "to_after_key_up": [
                  {
                    "set_variable": {
                      "name": "caps_lock pressed",
                      "value": 0
                    }
                  }
                ],
                "to_if_alone": [
                  {
                    "key_code": "escape"
                  }
                ],
                "type": "basic"
              }
            ]
          },
          {
            "description": "CAPS+↩︎ › CAPS",
            "manipulators": [
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "return_or_enter",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "caps_lock"
                  }
                ],
                "type": "basic"
              }
            ]
          },
          {
            "description": "CAPS+A › CAPS",
            "manipulators": [
              {
                "conditions": [
                  {
                    "name": "caps_lock pressed",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "a",
                  "modifiers": {
                    "optional": ["any"]
                  }
                },
                "to": [
                  {
                    "key_code": "caps_lock"
                  }
                ],
                "type": "basic"
              }
            ]
          }
        ]
      },
      "devices": [
        {
          "disable_built_in_keyboard_if_exists": false,
          "fn_function_keys": [],
          "game_pad_swap_sticks": false,
          "identifiers": {
            "is_game_pad": false,
            "is_keyboard": true,
            "is_pointing_device": false,
            "product_id": 0,
            "vendor_id": 0
          },
          "ignore": false,
          "manipulate_caps_lock_led": true,
          "mouse_flip_horizontal_wheel": false,
          "mouse_flip_vertical_wheel": false,
          "mouse_flip_x": false,
          "mouse_flip_y": false,
          "mouse_swap_wheels": false,
          "mouse_swap_xy": false,
          "simple_modifications": [],
          "treat_as_built_in_keyboard": false
        },
        {
          "disable_built_in_keyboard_if_exists": false,
          "fn_function_keys": [],
          "game_pad_swap_sticks": false,
          "identifiers": {
            "is_game_pad": false,
            "is_keyboard": false,
            "is_pointing_device": true,
            "product_id": 0,
            "vendor_id": 0
          },
          "ignore": true,
          "manipulate_caps_lock_led": false,
          "mouse_flip_horizontal_wheel": false,
          "mouse_flip_vertical_wheel": false,
          "mouse_flip_x": false,
          "mouse_flip_y": false,
          "mouse_swap_wheels": false,
          "mouse_swap_xy": false,
          "simple_modifications": [],
          "treat_as_built_in_keyboard": false
        }
      ],
      "fn_function_keys": [
        {
          "from": {
            "key_code": "f1"
          },
          "to": [
            {
              "consumer_key_code": "display_brightness_decrement"
            }
          ]
        },
        {
          "from": {
            "key_code": "f2"
          },
          "to": [
            {
              "consumer_key_code": "display_brightness_increment"
            }
          ]
        },
        {
          "from": {
            "key_code": "f3"
          },
          "to": [
            {
              "apple_vendor_keyboard_key_code": "mission_control"
            }
          ]
        },
        {
          "from": {
            "key_code": "f4"
          },
          "to": [
            {
              "apple_vendor_keyboard_key_code": "spotlight"
            }
          ]
        },
        {
          "from": {
            "key_code": "f5"
          },
          "to": [
            {
              "consumer_key_code": "dictation"
            }
          ]
        },
        {
          "from": {
            "key_code": "f6"
          },
          "to": [
            {
              "key_code": "f6"
            }
          ]
        },
        {
          "from": {
            "key_code": "f7"
          },
          "to": [
            {
              "consumer_key_code": "rewind"
            }
          ]
        },
        {
          "from": {
            "key_code": "f8"
          },
          "to": [
            {
              "consumer_key_code": "play_or_pause"
            }
          ]
        },
        {
          "from": {
            "key_code": "f9"
          },
          "to": [
            {
              "consumer_key_code": "fast_forward"
            }
          ]
        },
        {
          "from": {
            "key_code": "f10"
          },
          "to": [
            {
              "consumer_key_code": "mute"
            }
          ]
        },
        {
          "from": {
            "key_code": "f11"
          },
          "to": [
            {
              "consumer_key_code": "volume_decrement"
            }
          ]
        },
        {
          "from": {
            "key_code": "f12"
          },
          "to": [
            {
              "consumer_key_code": "volume_increment"
            }
          ]
        }
      ],
      "name": "Default",
      "parameters": {
        "delay_milliseconds_before_open_device": 1000
      },
      "selected": true,
      "simple_modifications": [],
      "virtual_hid_keyboard": {
        "country_code": 0,
        "indicate_sticky_modifier_keys_state": true,
        "mouse_key_xy_scale": 100
      }
    }
  ]
}
```

</details>
