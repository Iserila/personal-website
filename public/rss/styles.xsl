<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body style="font-family:sans-serif;max-width:700px;margin:auto">
                <h1>
                    <xsl:value-of select="rss/channel/title" />
                </h1>

                <xsl:for-each select="rss/channel/item">
                    <article style="margin-bottom:2rem">
                        <h2>
                            <a href="{link}">
                                <xsl:value-of select="title" />
                            </a>
                        </h2>

                        <p>
                            <xsl:value-of select="description" />
                        </p>
                    </article>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>