var g_volume = 80;
var g_link = rad_stations[0][0];
var is_play = false;
var g_text_color = '#ffffff';
var g_playimg = g_pause_white;
var g_pauseimg = g_pause_white;
var g_soundimg = g_sound_white;
var g_rad_width = 'responsive';
var g_rad_width_px = 330;

var g_play_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5OTc2RkQxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE5OTc2RkMxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DF5mqgAAAWtJREFUeNq8ls0uBEEQx2c63BzNnmRm4yTcfFzcxN2R4R0QcSdewTsw4RVkkazEgeuKEyHjspx8HbDb/rWpTkS6p7t3jH/yu8z0VHVVd1VNKKUMCjQKFsEcGAcR+AQ5uAOn4ADcGi2QAw0x2AcdaVeH18Y6WzrjC+BZ+usFLNscrDvu2qQu2DA5WOIFZdVlWz27IR9yDFpgyHBUHyAEg4GbXsEEuFe73yvY0QOogQQ0PCLJVIoSS96bP9JIEa+Bd8fblQiEkQLhGDrlcxdMggvL2p5twUXkq2swC7bBV8G6eQo7t4TaNBSjYhq0DN/mFMFwUE6XYIbbx29FIqhY5OCppI0pPvARzbtHwQXWjwbAFjjnTqvTFTk47sP4GDgDO5bqbtAtqHsW2ip4cyy0uvows7SKiPv9kW+r+LdmR6R/2K7TKgfOZpUjc8VlJquhn3kM/cw09EOP3xY6tBo/b/OlOAGH4MZk4FuAAQCY66oR7nR+fgAAAABJRU5ErkJggg==";
var g_play_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQ0JBREE0RjFCQTUxMUU4ODI4MkVFRERBOTg0NjIwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQ0JBREE1MDFCQTUxMUU4ODI4MkVFRERBOTg0NjIwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBOTk3NzA2MUJBNDExRTg4MjgyRUVEREE5ODQ2MjBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDQkFEQTRFMUJBNTExRTg4MjgyRUVEREE5ODQ2MjBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tktq4QAAAc1JREFUeNqklj9Iw1AQxtNQBUU34yBaoSBI62QqouAgriK42BZcO4p0EJ0UXdShiM5dlbSL4Cj4ZxAcjJstTrWKOKibTirV7+AqobyXvNce/AhtXr4vudzdS8i2bcMnomABTIMYsMA3eAaP4BIUXNd9kAmEJAYRsAOSwDT8o0YmYA1GT40nRRfPgTuQVhCva9DaUiKRSAcZLINj0G3oRxc4hElWZkDp2FO8a2nKQQ4myUYDynmeF4jii1+uqkkeJhGvwTY/oihewAAYAuca6dqtV9EgjhWf1FyBKc/dLXGFdShUV5REUxp5/wUHYBTcKFRXyuQm0o17MAk2wI/PuhkyGGmyYkh4C0yAsmRNjAx6WihLA93r4jDG46MxrFZqXinI4L0VAdS7zS+8X3D6jQxKTWqHwTq45kkrirKp0TzeGOb+2ARtPuvOTB61NY0xQI12C8ZVxjgZVEExYNOxeF6dcqN1KtxMEQVWDfOPVTArmUd9XIKhgHR445M1/0cE7UQZHgWiaNcQJ41MfXfz9oEDshrvQya+AnFHtqPtg3nw0YQ4pWUR4rmgPfmE55Oj+DQ1XhuH+JHqV4XosyUOevn/V27QC66WikzgT4ABANX4bk9Wc1FzAAAAAElFTkSuQmCC";

var g_pause_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5OTc3MDExQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE5OTc3MDAxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W9Wb8wAAADlJREFUeNpi/P//PwMtARMDjQHNLWAhII8efoxEyg2jIBq1YNSCUQtGLRi1YFjUaIxkyg2jIAIIMACulQUzpYSECgAAAABJRU5ErkJggg==";
var g_pause_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QTk5NzcwNDFCQTQxMUU4ODI4MkVFRERBOTg0NjIwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QTk5NzcwNTFCQTQxMUU4ODI4MkVFRERBOTg0NjIwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBOTk3NzAyMUJBNDExRTg4MjgyRUVEREE5ODQ2MjBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBOTk3NzAzMUJBNDExRTg4MjgyRUVEREE5ODQ2MjBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WsafDgAAAD5JREFUeNpi/P//PwMtARMDjQHNLWDBJ2liYoISfmfOnGEkRm54BdGoBaMWjFowasGoBUPCAsbRSp8QAAgwAHVNDivmolxgAAAAAElFTkSuQmCC";

var g_sound_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyQTE3N0EyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyQTE3NzkyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eZyjRAAAAT9JREFUeNpi/P//PwMtAeOQt4ABZAEFuAGIbwBxGC41xBqkDMTzgJgPTdwFiB//h4DZQMxMjgUyQHwfaogNFnleIF4IlZ9FqgWiQHzzPwIgW3AAiE8BsQEQg+JyOlRNJLEWCALxpf+oANmCTCD+BsRfgdgCiNmA+AoQPwFiTmwWqEDDFIZP/McE6EGkCcSvgPgREHMBcQBUXQw2Cz7/JwxAFrAD8QsgXgJ1tTdULheImYD4JRCvxWbBfyItYEAK72IoHxRPe6HsdUD8AGYuE5nZJxOITwNxMJR/GYjVoezHQCwOU8hEg7zLhswh14LpQGwKxGuhfF0gvgllywDxS2xFxXsSIvkVlkjOJxTJpCRTRhzJ1BeqLnZAMho5RcVpLEVF1KAq7NCLa348xfVccotrYiqccFxqGEcrfUIAIMAAMVC8ueloYN0AAAAASUVORK5CYII=";

var g_sound_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyQTE3N0UyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyQTE3N0QyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WGl9jgAAAbFJREFUeNrU1ksoRFEYwHGvyLMssGChyJvNNCxYqLFTIoVS8kosZGdlYaEsZCHJQiF5REQiG0JYSLIQIRbCAgs2SMn4n/qmpusMd4xbfPVr7txb59zzne98M/5Op9PPygjwsziCihyOP72CTpygwtcJkjCMKMP9bYRjGkMI/MkECVhFHXIMz9T9DIyhEYOf9uCbwWOwhkTNsw2EoQm1eEYz1jFlZgXRMniKh+cqLVnYQR7acIQehOomSEaRmxVkf/ECKh02PGFGstGBeJTrUnSACBN7EoJLyX+97M0SGjCAO5Rh3LiCCJMV9Yp5VKMVyzhDKd4lZTZfz0EL9txScYhUub5CnJWtIvg3TrLaYDvm5LsqhlO3c3Orm+DR5OAhkpoJ9KNYSnlRxsvFvq6K7IYD1SX1rdtklWPV59MxInkfkslisaCb4Fy4Qr3Fpoez4JSN7pXrEryhGzeYNbMHD3BICeqiUk5uPnbRh0y048VsL7qXSbY0/ahQPiMxihpJ06S3VXQtrWNE6t091P1jGXxY0uZVN3XFhbQFYxRIL6qS5mfJL1qap8FV+P/7fxUfAgwAMD9cdVs4gKIAAAAASUVORK5CYII=";

var g_radiologo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAVCAYAAAAHIbMXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4REVCMDM2RkQxREYxMUUyOEJBQUYzQTJGMkZBNzU0QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4REVCMDM3MEQxREYxMUUyOEJBQUYzQTJGMkZBNzU0QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhERUIwMzZERDFERjExRTI4QkFBRjNBMkYyRkE3NTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERUIwMzZFRDFERjExRTI4QkFBRjNBMkYyRkE3NTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+G1/AVAAAA0BJREFUeNrsWNFt2zAQtYv8W51AygSWgfxHnqDKBFImiD1B7AmiTGB6A3kCK/8GSm+gTFB5AvcYvCteCdkxWjdwUBE4iBLJ4927u0dJ/f1+3+van7UvHQQdeB14HXj/Ubs6NHBzcxPIJXb9zWZTHZl3DjsikUSkFrEizUcBIL6dL/MEjEiklO4PkbUTuW9E4hN1piIO7ODE+TPMX2A/t29xZL6zw+CaUP8iytYB9w39a5GRyABOntJykVtybo/roYx7FAlFtiJfRV5EHo6sccHJSH8GPRcDnnPkVVK6FrF4fmomKfC67gXl2Nbc82f0Dcq1fke/2lERaPYiwBOwZjDQahljqKGyTsCJfjlptrxifkVcpo5HLQD2qNRdZu0IkMjLwgT6a/S36McIfPwOr/Y8Xec7MABWSLzz6+pAg4GujOco5QCOD0mNwfMaYynKeYHxe+KqHGCpHqf7DuD7a0rsswQYIZ5pxYQH+NKgvFnPm83i05ZANLA5hT0FaOVZkmpyymlrlFtEcQr+WtJJaL0oFrgfg/B3eJYCiJIM2WL9jPhO25rKXDNoAX0DrEsoS2OvfEOuEC+7MuytAZ6gPxV5wn1K47rnBP0YieWujsqaQ5ynRt1C7mRyjiwY4PrGM1CWAXDrgVlQRhRYO4QzIYydY84SGTHHnjntM8AYB7bygCygYweH20ozRYAtzdHrI4G+on3U5wYVyTzbCl4DTpl6nJTQhiEZroRd0Xotvy0c05KZY+0KQYrodcWQjojGxlT+gxa+a7B/gEBl6CfeIdd4ti0JsBEFf+bpVv+c7pIO0N/BI75jMBIPxBwOPEDhDuWlhj7h+RyZloLDNMKcHQnuWbfuVVI5rymT1a4h9QOc8hlOb4M1Oc1xOr9jbIW5Q/CZRTD1oBvS/pyZk2Ocp8ZXTiG+HgLKOENRjtyXBwDX0zml6Kqj+sUwgoEVHIkoCzXiGcAs6bUlojWWMuSe9pnRfEMnr6HMSvHM0qluKZMK3Nfi0xh9V65T8Fzpl2if/+fJxBoOXUPJHtEweIU55+dZjExQctbDYvKR721/83l21UauDjgi8n/1Bm8pG2virk/T+t2f5O6XVAfeZ2s/BRgAHxBDDDO9ykQAAAAASUVORK5CYII=";

var g_radiologowhite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAVCAYAAAAHIbMXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQzJERUVFNUQyNjExMUUyOEJBQUYzQTJGMkZBNzU0QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQzJERUVFNkQyNjExMUUyOEJBQUYzQTJGMkZBNzU0QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4RjlCQzY0RDIzNjExRTI4QkFBRjNBMkYyRkE3NTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNDMkRFRUU0RDI2MTExRTI4QkFBRjNBMkYyRkE3NTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hs9dHQAAAqhJREFUeNrsWNGN3CAQ9UX5Dx3EJZAOSAVxB+cSnA5IB6QDXwdOB04HpAPSAR0QVnojvYzAt1rdZXWKkUbGYIbhMfNmdh9KKcPZbmvvTghO8E7wTvD+o/b+YM5Usejvr2zHWMVVSVVilfwm0LtkWyVjla383XIV2/i2JVOVvYq58ntfJan9wsH3FztWPB31h38trcFIhxhhWAGg1ygV4B1E+r2LkhYB+P7MGo/5mfrTPcBrcd5W5VeV3xRGEsbXtC94yrqf0NNql/Hv6K8I1/SMfkNUMqq97h62A8JoU97B764RlpY8LXX0GqznsQVrLOYzxKj9ODIS2Rlp/+0ghMeGN7uXDlsBa+mEYca7J0Ci4ixPQAjoM83PdOCI7xzpmTprDPor2RkIyF64rw09UdGFga0BujLRQrgWPOGcnfpibMZYwlMMy+R14jWzMjbD0BXrfWm3nYAtdFkWoIrOiYBm7rQN7yoEFnPlQpcdVYIsFAVskzkCL6vDTIqoRxw+0AEDeYXHuOgx6uYTHcbT5cwqGQTlLaxzpHnxGLnEtZNgJGxZT1KXVsj7Cl3QRs5jjxJGRrL4SqQ+oA67tKXKR1X/Repn9D8g8YQqj5j7hrU/UEMK4XskjJ3qPpn7DBtEpyQyB/0Z+xsku0f0nUpyWdn2RPXkJ0o6XumW822Q2EsYnBys4r6VXDmRx7RucaUbz3SD8j4ST+UGN82K74ry0kFxUVA14ka2OxWKQdWxgegqEQae1pZW7dqroRYykBODo4zpCHBLBbJTfGOIL2YCTmdxrzhT1vOaifo8brB+VntxJeDJTkNUMDR0s91Lr45slSiFlBQi95cuMnVCkNu9y6+FW0T/tnWK557AIeMrlJgRXGOxX75bsXtjezj/ST7/kjrBe2vtjwADAEeGheohZXviAAAAAElFTkSuQmCC";

var g_playimg = g_pause_white;
var g_pauseimg = g_pause_white;
var g_soundimg = g_sound_white;

var rad_plogo = g_radiologo;

if (rad_logo=='black'){
	rad_plogo = g_radiologowhite;
	g_playimg = g_play_white;
	g_pauseimg = g_pause_white;
	g_soundimg = g_sound_white;
	g_text_color = '#ffffff';
}else{
	rad_plogo = g_radiologo;
	g_playimg = g_play_black;
	g_pauseimg = g_pause_black;
	g_soundimg = g_sound_black;
	g_text_color = '#2c2c2c';
}

	
var block_play = '<div id="rad_block_play" style="cursor: pointer; width: 20px"><img src="'+g_playimg+'" id="rad_play_btn" onclick="rad_playstop(); return false;" align="absmiddle"></div>';
	
if (rad_stations[0][2]!=undefined){
	var img = rad_stations[0][2];
}else{
	var img = 'noradio';
}


var select = '<div style="color: '+g_text_color+';" onclick="return rad_show_stations();" id="rad_select" align="left"><div id="rad_stationname">' + '<img src="https://radiobells.com/stations/' + img +'_70.jpg" align="absmiddle" id="rad_select_main_image"><span id="rad_select_main_text">' + rad_stations[0][1] + '</span></div><div id="rad_dropdown">в–ј</div></div>';
	select += '<div id="rad_list" style="display: none;" align="left">';

	for (var i=0; i<rad_stations.length; i++){
		if (rad_stations[i][2]!=undefined){
			var img = rad_stations[i][2];
		}else{
			var img = 'noradio';
		}
		select += '<div data-url="' + rad_stations[i][0] + '" data-img="' + img + '" align="left" onclick="return rad_selectthis(this);" onmouseover="this.style.backgroundColor = \'#434242\'" onmouseout="this.style.backgroundColor = \'#2c2c2c\'" class="rad_selection">';

		if (rad_stations[i][2]!=undefined){
	        select += '<img src="https://radiobells.com/stations/' +rad_stations[i][2] +'_70.jpg" class="rad_select_small_image" align="absmiddle">';
	    }else{
	    	select += '<img src="https://radiobells.com/stations/noradio_70.jpg" class="rad_select_small_image" align="absmiddle">';
	    }
	    select += rad_stations[i][1] + '</div>'
	}
	select += '</div>';

var block_select = '<div id="rad_block_select">'+select+'</div>';

var block_volume = '<div id="rad_block_volume"><img src="'+g_soundimg+'" id="rad_sound_btn" onclick="rad_show_volume(); return false;" align="absmiddle">'+
	'<div id="rad_volume" style="display: none;" align="left">' +
		'<div id="rad_volume_range" onmousemove="volumemove(event);"><div style="height: '+g_volume+'px; " id="rad_volume_bar"></div></div>'+
	'</div>'+
	'</div>';

var block_logo = '<div id="rad_block_logo" align="center"><a href="https://www.radiobells.com" target="_blank" title="РѕРЅР»Р°Р№РЅ СЂР°РґРёРѕ"><img src="'+rad_plogo+'" border="0" id="rad_logo" alt="РѕРЅР»Р°Р№РЅ СЂР°РґРёРѕ"></a></div>';

if (rad_width == 'responsive'){
	var style_rad_width = '100%';
}else{
	var style_rad_width = g_rad_width_px+'px';
}


document.getElementById('radiobells_container').innerHTML = '<div style="background-color: '+rad_backcolor+'; width: '+style_rad_width+';" id="rad_player"><div style="height: 28px;">' + block_play + block_select + block_volume + block_logo +'</div></div>';

var g_rad_player_width = document.getElementById("rad_player").clientWidth;

if (g_rad_player_width<=430){
    document.getElementById('rad_player').style.height = '78px';
    document.getElementById('rad_block_logo').style.width = '100%';
    document.getElementById('rad_block_logo').style.borderTop = '1px solid #222';
    document.getElementById('rad_block_logo').style.marginLeft = '0px';
    document.getElementById('rad_block_logo').style.marginTop = '0px';
    document.getElementById('rad_block_logo').style.paddingTop = '4px';
}else{
    document.getElementById('rad_player').style.height = '48px';
    document.getElementById('rad_block_logo').style.width = 'inherit';
    document.getElementById('rad_block_logo').style.borderTop = 'none';
    document.getElementById('rad_block_logo').style.marginLeft = '50px';
    document.getElementById('rad_block_logo').style.marginTop = '12px';
    document.getElementById('rad_block_logo').style.paddingTop = '0px';
}

if (g_rad_player_width<=300){
    document.getElementById('rad_select_main_text').style.display = 'none';
    document.getElementById('rad_stationname').style.width = '65px';
    document.getElementById('rad_select').style.width = '80px';
    document.getElementById('rad_block_play').style.marginRight = '0px';
    document.getElementById('rad_list').style.marginLeft = '-52px';
    document.getElementById('rad_block_volume').style.marginRight = '0px';
    document.getElementById('rad_block_volume').style.marginLeft = '0px';
}else{
    document.getElementById('rad_select_main_text').style.display = 'inline-block';
    document.getElementById('rad_stationname').style.width = '155px';
    document.getElementById('rad_select').style.width = '179px';
    document.getElementById('rad_block_play').style.marginRight = '10px';
    document.getElementById('rad_list').style.marginLeft = '9px';
    document.getElementById('rad_block_volume').style.marginRight = '10px';
    document.getElementById('rad_block_volume').style.marginLeft = '4px';
}

var g_audio = document.createElement('audio');
	
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		if (rad_autoplay){
			rad_loadmusic();
		}
	}
}

function rad_selectthis(t){
	document.getElementById('rad_list').style.display='none';
	g_link = t.getAttribute('data-url');
	document.getElementById('rad_select_main_text').innerHTML = t.innerText;
    document.getElementById('rad_select_main_image').setAttribute('src','https://radiobells.com/stations/'+t.getAttribute('data-img')+'_70.jpg');
	rad_loadmusic();
	return false;
}

function rad_show_stations(){
  	var win_height = document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;

  	if (win_height - document.getElementById('rad_player').getBoundingClientRect().bottom > 220){
  		document.getElementById('rad_list').style.marginTop='48px';
  	}else{
  		document.getElementById('rad_list').style.marginTop='-'+(rad_stations.length*35)+'px';
  	}


	if (document.getElementById('rad_list').style.display=='none'){
		document.getElementById('rad_list').style.display='block';
	}else{
		document.getElementById('rad_list').style.display='none';
	}
	return false;
}

function rad_show_volume(){
	console.log(1);
	var win_height = document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;

  	if (win_height - document.getElementById('rad_player').getBoundingClientRect().bottom > 220){
  		g_volume_position = "bottom";
  		document.getElementById('rad_volume').style.marginTop='12px';
  		document.getElementById('rad_volume_range').style.verticalAlign='top';
  	}else{
  		g_volume_position = "top";
  		document.getElementById('rad_volume').style.marginTop='-164px';
  		document.getElementById('rad_volume_range').style.verticalAlign='bottom';
  	}


	if (document.getElementById('rad_volume').style.display=='none'){
		document.getElementById('rad_volume').style.display='block';
	}else{
		document.getElementById('rad_volume').style.display='none';
	}
	return false;
}

function rad_loadmusic(){
	g_audio.src = g_link;
	g_audio.volume = g_volume/100;
	g_audio.play();
	is_play = true;
	document.getElementById('rad_play_btn').src = g_pauseimg;
}

function rad_playstop(){
	if (is_play){
		g_audio.pause();
		document.getElementById('rad_play_btn').src = g_playimg;
		is_play = false;
	}else{
		g_audio.src = g_link;
		g_audio.volume = g_volume/100;
		g_audio.play();
		document.getElementById('rad_play_btn').src = g_pauseimg;
		is_play = true;
	}
}

var g_volume_position = "top";

function volumemove(event){
	if (g_volume_position == "bottom"){
		var top = document.getElementById("rad_volume_range").getBoundingClientRect().top;
		if(window.event)
			event = window.event;
		var mousey = event.clientY - top;
		var newvol = Math.floor(mousey);
	}else{
		var bottom = document.getElementById("rad_volume_range").getBoundingClientRect().bottom;
		if(window.event)
			event = window.event;
		var mousey = bottom - event.clientY;
		var newvol = Math.floor(mousey);
	}
	document.getElementById("rad_volume_bar").style.height = newvol+'px';
	g_volume = newvol;
	g_audio.volume = g_volume/100;
}


let player = document.getElementById('radiobells_container');
let music = document.getElementByClassName('description')[0];
music.appendChild(player);
//player.style.display='none';