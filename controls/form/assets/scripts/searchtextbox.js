using("Controls.Form.CombinedTextBox");var SearchTextBox = CombinedTextBox.extend({		xtype: 'searchtextbox',		tpl: '<span class="x-combinedtextbox">\				<input type="text" class="x-textbox x-searchtextbox" type="text" value="文本框" id="id"/><button class="x-searchtextbox-search"></button>\			</span>',		init: function(){		this.base('init');		this.textBox.on('focus', this.textBox.select);	}});