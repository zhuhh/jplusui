/** * @author  xuld */using("Controls.Core.ICollapsable");using("Controls.Core.ContainerControl");/** * 内容显示面板。 * @class Panel * @extends ContainerControl */var Panel = ContainerControl.extend({		tpl: '<div class="x-panel">\				<div class="x-panel-body">\				</div>\			</div>',		/**	 * xtype	 * @type String	 */	xtype: 'panel'	}).implement(ICollapsable);