// simple embed constructor for discord.js, which simplifies the process of creating embeds for messages.

const { EmbedBuilder } = require("discord.js");

class EmbedConstructor {
  constructor({
    desc = "",
    fields = [],
    color = 0x000000,
    image = null,
    footer = null,
  }) {
    this.desc = desc;
    this.fields = fields;
    this.color = color;
    this.image = image;
    this.footer = footer;
  }

  addField(name, value, inline = false) {
    this.fields.push({ name, value, inline });
    return this;
  }

  setDescription(desc) {
    this.desc = desc;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setImage(image) {
    this.image = image;
    return this;
  }

  setFooter(text, iconURL = null) {
    this.footer = { text, iconURL };
    return this;
  }

  build() {
    const embed = new EmbedBuilder()
      .setTitle("title here")
      .setColor(this.color)
      .setTimestamp();

    if (this.desc && this.desc.length > 0) {
      embed.setDescription(this.desc);
    }

    this.fields.forEach((field) => {
      embed.addFields({
        name: field.name,
        value: field.value,
        inline: field.inline,
      });
    });

    if (this.image) {
      embed.setImage(this.image);
    }

    if (this.footer) {
      embed.setFooter(this.footer);
    } else {
      embed.setFooter({
        text: "default footer text here",
      });
    }

    return embed;
  }
}

module.exports = { EmbedConstructor };
